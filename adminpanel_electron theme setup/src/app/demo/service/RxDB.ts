import { RxCollection, RxDatabase, RxDocument } from "rxdb";
import { RxUserType } from "./model";

export type RxUserDocument = RxDocument<RxUserType, {}>;
export type RxUserCollection = RxCollection<RxUserType,{},{}>;
export type RxUserCollections = {user:RxUserCollection}
export type RxUserDatabase = RxDatabase<RxUserCollections> 