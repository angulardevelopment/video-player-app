import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-videospeed',
  templateUrl: './videospeed.component.html',
  styleUrls: ['./videospeed.component.css']
})
export class VideospeedComponent implements OnInit {


  constructor() { }


  ngOnInit() {
    const speed = document.querySelector('.speed');
  const bar = <HTMLDivElement>speed.querySelector('.speed-bar');
  const video = <HTMLVideoElement>document.querySelector('.flex');

  function handleMove(e) {
      const y = e.pageY - this.offsetTop;
      const percent = y / this.offsetHeight;
      const min = 0.4;
      const max = 4;
      const height = Math.round(percent * 100) + '%';
      const playbackRate = percent * (max - min) + min;
      bar.style.height = height;
      bar.textContent = playbackRate.toFixed(2) + '×';
      video.playbackRate = playbackRate;
    }

  speed.addEventListener('mousemove', handleMove);

  /* Get Our Elements */
const player = document.querySelector('.player');
const video2 = <HTMLVideoElement>player.querySelector('.viewer');
const progress = <HTMLDivElement>player.querySelector('.progress');
const progressBar = <HTMLDivElement>player.querySelector('.progress__filled');
const toggle = <HTMLButtonElement>player.querySelector('.toggle');
const skipButtons = Array.from(player.querySelectorAll('[data-skip]'));
const ranges = Array.from(player.querySelectorAll('.player__slider'));

/* Build out functions */
function togglePlay() {
  const method = video2.paused ? 'play' : 'pause';
  video2[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video2.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video2[this.name] = this.value;
}

function handleProgress() {
  const percent = (video2.currentTime / video2.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video2.duration;
  video2.currentTime = scrubTime;
}

/* Hook up the event listeners */
video2.addEventListener('click', togglePlay);
video2.addEventListener('play', updateButton);
video2.addEventListener('pause', updateButton);
video2.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

  }

}
