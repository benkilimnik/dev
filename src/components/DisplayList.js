import React, { Component } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

class DisplayList extends Component {
  state = {
    checkedOut: [],
  }

  // remove song from checkedOut array within the state
  removeSong = (song) => {
    const checkedOut = this.state.checkedOut.filter((s) => s.id !== song.id)
    this.setState({
      checkedOut,
    })
  }

  // place song in checkedOut array within the state
  addSong = (song) => {
    if (this.state.checkedOut.filter((s) => s.id === song.id).length === 0) {
      let checkedOut = this.state.checkedOut.concat(song)
      this.setState({
        checkedOut,
      })
    }
  }

  // generate html cards for all songs added by user
  htmlCheckedOutSongs = (song) => {
    return (
      <Card key={song.id}>
        <Card.Img variant="top" src={song.image} />
        <Card.Body>
          <Card.Title>{song.name}</Card.Title>
          <Card.Text>Genre: {song.genre}</Card.Text>
          <Card.Text>Price: {song.price}</Card.Text>
          <Card.Text>Days since release: {song.days}</Card.Text>
        </Card.Body>
        <Button variant="danger" onClick={() => this.removeSong(song)}>
          Remove from My Songs
        </Button>
      </Card>
    )
  }
  // generate html cards for all songs
  htmlAllSongs = (song) => {
    return (
      <Card key={song.id}>
        <Card.Img variant="top" src={song.image} />
        <Card.Body>
          <Card.Title>{song.name}</Card.Title>
          <Card.Text>Genre: {song.genre}</Card.Text>
          <Card.Text>Price: {song.price}</Card.Text>
          <Card.Text>Days since release: {song.days}</Card.Text>
        </Card.Body>
        <Button variant="success" onClick={() => this.addSong(song)}>
          Add to My Songs
        </Button>
      </Card>
    )
  }

  render() {
    const all = this.props.songsToShow
    const checkedOut = this.state.checkedOut
    let priceTotal = 0
    const findPriceTotal = this.state.checkedOut.forEach((n) => {
      priceTotal += n.price
    })

    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                Number of songs that match your selections:
              </Card.Header>
              <Card.Body>{all.length}</Card.Body>
            </Card>
            {all.map(this.htmlAllSongs)}
          </Col>
          <Col>
            <h1>My Songs</h1>
            <h2>${priceTotal}</h2>
            {checkedOut.map(this.htmlCheckedOutSongs)}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default DisplayList
