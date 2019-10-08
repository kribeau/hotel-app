import React, {Component} from 'react'
import defaultBcg from '../images/room-1.jpeg'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'

import StyledHero from '../components/StyledHero'
export default class SingleRoom extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    }
  }
  static contextType = RoomContext

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const {getRoom} = this.context
    const room = getRoom(this.state.slug)

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            返回
          </Link>
        </div>
      )
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room
    const [...defaultImages] = images
    // console.log(defaultImages)

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              返回
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>细节</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>信息</h3>
              <h6>价格 : ￥{price}</h6>
              <h6>大小 : {size} 平</h6>
              <h6>最大容量 :{capacity} 人</h6>
              <h6>{pets ? '允许携带宠物' : '禁止携带宠物'}</h6>
              <h6>{breakfast && '提供免费早餐'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>附加服务</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    )
  }
}
