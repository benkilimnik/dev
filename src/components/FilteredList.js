import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import DisplayList from "./DisplayList"
import Navbar from "react-bootstrap/Navbar"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class FilteredList extends Component {
  state = {
    price: "ascending",
    genre: "all",
    days: "all",
    songsToShow: this.props.allSongs,
  }

  // alter genre property of the state in response to dropdown selections
  genreGenerator = (g) => (e) => {
    this.setState({
      genre: g,
    })
    this.refresh(g, this.state.days, this.state.price)
  }

  genreAll = this.genreGenerator("all")
  genreRock = this.genreGenerator("rock")
  genreIndie = this.genreGenerator("indie")
  genreMetal = this.genreGenerator("metal")

  // alter days property of the state in response to dropdown selections
  daysGenerator = (g) => (e) => {
    this.setState({
      days: g,
    })
    this.refresh(this.state.genre, g, this.state.price)
  }

  daysAll = this.daysGenerator("all")
  daysToday = this.daysGenerator("today")
  daysThisWeek = this.daysGenerator("this week")
  daysThisMonth = this.daysGenerator("this month")

  // alter price property of the state in response to dropdown selections
  sortGenerator = (g) => (e) => {
    this.setState({
      price: g,
    })
    this.refresh(this.state.genre, this.state.days, g)
  }

  ascending = this.sortGenerator("ascending")
  descending = this.sortGenerator("descending")

  refresh = (genre, days, price) => {
    let toRefresh = this.props.allSongs

    // sort by price (ascending or descending)
    if (price === "ascending") {
      toRefresh = toRefresh.sort((x, y) => x.price - y.price)
    } else if (price === "descending") {
      toRefresh = toRefresh.sort((x, y) => y.price - x.price)
    }

    // filter the state by genre
    if (genre === "rock") {
      toRefresh = toRefresh.filter((i) => i.genre === "rock")
    } else if (genre === "indie") {
      toRefresh = toRefresh.filter((i) => i.genre === "indie")
    } else if (genre === "metal") {
      toRefresh = toRefresh.filter((i) => i.genre === "metal")
    }

    // filter the state by days
    if (days === "today") {
      toRefresh = toRefresh.filter((i) => i.days === 0)
    } else if (days === "this week") {
      toRefresh = toRefresh.filter((i) => i.days > 0 && i.days < 8)
    } else if (days === "this month") {
      toRefresh = toRefresh.filter((i) => i.days > 0)
    }

    this.setState({
      songsToShow: toRefresh,
    })
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">Song Shop</h1>
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand>Filter by Genre</Navbar.Brand>
              <DropdownButton as={ButtonGroup} title={this.state.genre}>
                <Dropdown.Item onClick={this.genreAll}>all</Dropdown.Item>
                <Dropdown.Item onClick={this.genreRock}>rock</Dropdown.Item>
                <Dropdown.Item onClick={this.genreIndie}>indie</Dropdown.Item>
                <Dropdown.Item onClick={this.genreMetal}>metal</Dropdown.Item>
              </DropdownButton>
            </Navbar>
            <Navbar>
              <Navbar.Brand>Filter by Days Since Release</Navbar.Brand>
              <DropdownButton as={ButtonGroup} title={this.state.days}>
                <Dropdown.Item onClick={this.daysAll}>all</Dropdown.Item>
                <Dropdown.Item onClick={this.daysToday}>today</Dropdown.Item>
                <Dropdown.Item onClick={this.daysThisWeek}>
                  this week
                </Dropdown.Item>
                <Dropdown.Item onClick={this.daysThisMonth}>
                  this month
                </Dropdown.Item>
              </DropdownButton>
            </Navbar>
            <Navbar>
              <Navbar.Brand>Sort by Price</Navbar.Brand>
              <DropdownButton as={ButtonGroup} title={this.state.price}>
                <Dropdown.Item onClick={this.ascending}>
                  ascending
                </Dropdown.Item>
                <Dropdown.Item onClick={this.descending}>
                  descending
                </Dropdown.Item>
              </DropdownButton>
            </Navbar>
          </Col>
        </Row>
        <DisplayList songsToShow={this.state.songsToShow}></DisplayList>
      </Container>
    )
  }
}

export default FilteredList
