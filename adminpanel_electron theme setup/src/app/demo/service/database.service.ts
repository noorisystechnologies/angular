import { Injectable } from '@angular/core';

import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
// import { MESSAGE_SCHEMA } from './model';
// import { RxMessageCollection, RxMessageDatabase } from './RxDB';
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';
import { RxDBMigrationPlugin } from 'rxdb/plugins/migration-schema';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { RxUserDatabase } from './RxDB';
import { USER_SCHEMA } from './model';
import Swal from 'sweetalert2';
addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBJsonDumpPlugin)
addRxPlugin(RxDBMigrationPlugin);

async function createDatabase(): Promise<any> {
  const db = await createRxDatabase<any>({
    name: 'user-db',
    storage: getRxStorageDexie()
  })


  const migrationStrategies = {
    0: (oldDoc: any) => {
      console.log('Running migration strategy for version 0 to 3');
      return {
        ...oldDoc,
        product: 'default',
      };
    },
  };

  // create collection
  await db.addCollections(

    {
      user: {
        schema: USER_SCHEMA,
        migrationStrategies
      }
    })

  const myCollection = db.user;
  // myCollection.exportJSON().then((json: any) => console.table(json))

  //  myCollection.exportJSON().then((json: any) => console.table(json?.docs?.length))
  return db

}

let initState: null | Promise<any>;
let DB_INSTANCE: any

export async function initDatabase() {
  if (!initState) {
    initState = createDatabase().then((db) => {
      DB_INSTANCE = db;
      return db;
    })
  }
  await initState
}


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private readonly userKey = 'user'

  // for initialize database
  get db(): Promise<RxUserDatabase | undefined> {
    return initDatabase().then(() => DB_INSTANCE);
  }

  // For get all user data
  async getAllUsers() {
    return initDatabase().then(() => DB_INSTANCE?.user.find({
      selector: {},
      sort: [{ timestamp: 'desc' }]}).exec());
  }

  // For get data with id
  async getUserById(userId: string) {
    return initDatabase().then(() => DB_INSTANCE?.user.findOne().where('id').eq(userId).exec());
  }

  // Update data
  async updateUserData(userId: string, updatedData: any) {
    return initDatabase().then(async () => {
      const user = await DB_INSTANCE?.user.findOne({ selector: { id: userId } }).exec();

      if (user) {
        // Update the user data
        await user.update({
          $set: updatedData,
        });

        return user.toJSON();
      } else {
        throw new Error('User not found');
      }
    });
  }

  // Delete user
  async deleteUserData(userId: string) {
    return initDatabase().then(async () => {
      const user = await DB_INSTANCE?.user.findOne({ selector: { id: userId } }).exec();

      if (user) {
        // Delete the user
        await user.remove();
        return true; // Indicates successful deletion
      } else {
        throw new Error('User not found');
      }
    });
  }

  // Login Function
  async login(email: string, password: string) {
    return initDatabase().then(async () => {
      const user = await DB_INSTANCE?.user.findOne({ selector: { email, password } }).exec();
      if (user) {
        localStorage.setItem(this.userKey, JSON.stringify({ user }));
        // User found, return user data
        return user.toJSON();
      } else {
        throw new Error('Invalid credentials');       
      }
    });
  }


  isAuthenticated(): boolean {
    // Check if the user information exists in local storage
    return !!localStorage.getItem(this.userKey);
  }

  logout(): void {
    // Remove user information from local storage
    localStorage.removeItem(this.userKey);
  }
  constructor() { }
}
