import React from 'react'
import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap'

const CategoryBar = () => {
  return (
    <div className='categoryBar'>
      {/* <button id='allCategories'>All Category</button> */}
      <Dropdown>
        <Dropdown.Toggle id="allCategories">
            All Categories
        </Dropdown.Toggle>

        <Dropdown.Menu id='dropdownMenu'>
            <Dropdown.Item className='dropdownItem' href="#beats">Beats</Dropdown.Item>
            <Dropdown.Item className='dropdownItem' href="#logitech">Logitech</Dropdown.Item>
            <Dropdown.Item className='dropdownItem' href="#razer">Razer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div id='enterKeywords'>
        <InputGroup>
            <Form.Control
            placeholder="Enter Keywords"
            id='keyword'
            />
            <Button id="search">
            Search
            </Button>
        </InputGroup>
      </div>
    </div>
  )
}

export default CategoryBar
