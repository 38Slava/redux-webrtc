import { Component } from 'react'

class Video extends Component {
  componentDidMount() {
    console.log(this.refs)
  }
  render () {
    return (
      <div>
        <video ref='video' />
      </div>
    )
  }
}

// const Video = (props) => (
//   <div>
//     <video />
//   </div>
// )

export default Video
