# Media Converter

This is a simple ffmpeg media wrapper

### Install
```
npm install --save @awesome-typescript/media-converter
```

### How to use

#### MediaCombiner
```js
import { MediaCombiner } from './media-combiner'

MediaCombiner.videoConcat(
  ['./tmp/video1.mp4', './tmp/video2.mp4', './tmp/video3.mp4'],
  './tmp/out.mp4'
)
```

#### MediaMetadata
```js
import { MediaMetadata } from './media-metadata'

MediaMetadata.filesDurationInSeconds('./tmp/video1.mp4')
MediaMetadata.fileDurationInSeconds('./tmp/video1.mp4')
MediaMetadata.filesDurationInMinutes('./tmp/video1.mp4')
MediaMetadata.fileDurationInMinutes('./tmp/video1.mp4')

MediaMetadata.isLandscape('./tmp/video1.mp4')
MediaMetadata.isPortrait('./tmp/video1.mp4')
MediaMetadata.isSquare('./tmp/video1.mp4')
MediaMetadata.isRatio_4_5('./tmp/video1.mp4')
MediaMetadata.isRatio_9_16('./tmp/video1.mp4')
MediaMetadata.isRatio_16_9('./tmp/video1.mp4')
```

#### VideoConverter
```js
import { VideoConverter } from './video-converter'

VideoConverter.videoToAudio('./tmp/video1.mp4', './tmp/video1.mp3')
VideoConverter.videoToTS('./tmp/video1.mp4', './tmp/video1.ts')
```
