import { Component, PropTypes } from 'react'
import Video from 'components/Video'
import WebRtc from 'react-simplewebrtc'

class VideoContainer extends Component {
  static propTypes = {
    video: PropTypes.any
  }
  componentDidMount () {
    // this.props.initVideo()
  }
  render () {
    const options = {
      roomname: '123',
      signalmasterUrl: 'www.example.com'
    }
    return (
      <div>
        <WebRtc options={options} />
      </div>
    )
  }
}

export default VideoContainer
