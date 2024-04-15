import Header from "../components/Header/Header"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'


describe("Header", () => {
  it("should have a header", () => {
    render(<Header />)

    const heading = screen.getByRole('heading')
 
    expect(heading).toBeInTheDocument()
  })
})