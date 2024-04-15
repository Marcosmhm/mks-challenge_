import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Sidebar from "../components/Sidebar/Sidebar"


describe("Header", () => {
  it("should have a header", () => {
    // @ts-ignore
    render(<Sidebar />)

    const decrement = screen.getByText('-')
 
    expect(decrement).toBeInTheDocument()
  })
})