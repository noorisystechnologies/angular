import { Component, OnInit } from '@angular/core';
import AgoraRTC from 'agora-rtc-sdk-ng';

@Component({
  selector: 'app-video-client',
  templateUrl: './video-client.component.html',
  styleUrls: ['./video-client.component.scss']
})
export class VideoClientComponent implements OnInit {

  rtc: any = {
    localAudioTrack: null,
    localVideoTrack: null,
    client: null
  }

  options = {
    // Pass your App ID here.
    appId: '2714b727f6184ca7810bc1d5750b37c9',
    // Set the channel name.
    channel: 'test',
    // Pass your temp token here.
    token:
      '007eJxTYOiUvhvStcTg7enYbaqHrsrvWCcUOYHrZMizCUeuRGQun1ugwGBkbmiSZG5knmZmaGGSnGhuYWiQlGyYYmpuapBkbJ5seXeueUpDICPDgXwFJkYGCATxWRhKUotLGBgAk9AgJw==',
    // token: null,
  }
  
  private uid: number;
  localCallId: any;
  remoteCallId: any;

  constructor() {
    this.uid = Math.floor(Math.random() * 10000000);
    this.localCallId = Math.floor(Math.random() * 10000000);
  }

  ngOnInit(): void {
    this.startBasicCall()
  }

  // remote call function
  startBasicCall() {
    this.rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
    this.rtc.client.on("user-published", async (user: any, mediaType: any) => {
      // Subscribe to the remote user when the SDK triggers the "user-published" event
      await this.rtc.client.subscribe(user, mediaType);
      console.log("subscribe success");

      // If the remote user publishes a video track.
      if (mediaType === "video") {
        // Get the RemoteVideoTrack object in the AgoraRTCRemoteUser object.
        const remoteVideoTrack = user.videoTrack;
        this.remoteCallId = await user.id;
        console.log("Remote ID => " + this.remoteCallId);
        // Dynamically create a container in the form of a DIV element for playing the remote video track.
        const remotePlayerContainer = document.getElementById(this.remoteCallId);

        // Play the remote video track.
        // Pass the DIV container and the SDK dynamically creates a player in the container for playing the remote video track.
        remoteVideoTrack.play(remotePlayerContainer);
      }

      // If the remote user publishes an audio track.
      if (mediaType === "audio") {
        // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
        const remoteAudioTrack = user.audioTrack;
        // Play the remote audio track. No need to pass any DOM element.
        remoteAudioTrack.play();
      }

      // Listen for the "user-unpublished" event
      this.rtc.client.on("user-unpublished", (user: any) => {
        // Get the dynamically created DIV container.
        // const remotePlayerContainer = document.getElementById(this.remoteCallId);
        // Destroy the container.
        // remotePlayerContainer.remove(); 
        console.log('has left the channel')
      });

    });
  }

  // Join incoming remote call
  async joinCall() {

    await this.rtc.client.join(this.options.appId, this.options.channel, this.options.token, this.uid);
    // Create a local audio track from the audio sampled by a microphone.
    this.rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    // Create a local video track from the video captured by a camera.
    this.rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

    await this.rtc.client.setClientRole("host");
    // Publish the local audio and video tracks to the RTC channel.
    await this.rtc.client.publish([this.rtc.localAudioTrack, this.rtc.localVideoTrack]);
    // Dynamically create a container in the form of a DIV element for playing the local video track.
    const localPlayerContainer = document.getElementById(this.localCallId);
    // Specify the ID of the DIV container. You can use the uid of the local user.
    // localPlayerContainer.id = this.uid.toString();
    // localPlayerContainer.textContent = "Local user " + this.uid;
    // localPlayerContainer.style.width = "640px";
    // localPlayerContainer.style.height = "480px";
    // document.body.append(localPlayerContainer);

    // Play the local video track.
    // Pass the DIV container and the SDK dynamically creates a player in the container for playing the local video track.
    this.rtc.localVideoTrack.play(localPlayerContainer);
    console.log("publish success!");

  }

  // leave joined call
  async leaveCall() {
    // Destroy the local audio and video tracks.
    this.rtc.localAudioTrack.close();
    this.rtc.localVideoTrack.close();
    // Leave the channel.
    await this.rtc.client.leave();
    console.log("You left the channel");
  }

}
