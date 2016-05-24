import { Component, PropTypes } from 'react'

class Video extends Component {
  static propTypes = {
    src: PropTypes.string,
    width: PropTypes.string
  }
  componentDidUpdate (prevProps, prevState) {
    this.refs.video.play()
  }
  render () {
    return (
      <div>
        <video ref='video' src={this.props.src} volume='0' muted={true} width={this.props.width} />
      </div>
    )
  }
}

export default Video
