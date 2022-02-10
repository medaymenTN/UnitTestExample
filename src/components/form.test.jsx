import { render , fireEvent} from "@testing-library/react";
import Form from "./form";

describe("Form", () => {
  let defaultProps = {};

  beforeEach(() => {
    defaultProps = {
      isActive: false,
      showAlert: jest.fn(),
      handleShowAlertWithParams: jest.fn()
    };
  });

  it("renders without crashing", () => {
    const view = render(<Form {...defaultProps} />);
    expect(view).toBeDefined();
  });
  it("should render the div when isAtive is true", () => {
    const newProps = { isActive: true };
    const { queryByTestId } = render(<Form {...newProps} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const myComponent = queryByTestId("my-div");
    expect(myComponent).toBeInTheDocument()
  });
  // eslint-disable-next-line jest/no-identical-title
  it("should not render the div when isAtive is false", () => {
   const { queryByTestId } = render(<Form {...defaultProps} />);
   // eslint-disable-next-line testing-library/prefer-screen-queries
   const myComponent = queryByTestId("my-div");
   expect(myComponent).toBeNull()
 });

 it("should  invoke showAlert when click on the button ", () => {
   const {container} = render(<Form {...defaultProps} />);
   const mybtn = container.querySelector("#my-btn");
   fireEvent.click(mybtn)
   
   expect(defaultProps.showAlert).toHaveBeenCalled()
 });

 it("should  invoke handleShowAlertWithParams when click on the button ", () => {
   const {container} = render(<Form {...defaultProps} />);
   const mybtn = container.querySelector("#my-btn-with-params");
   fireEvent.click(mybtn)
   
   expect(defaultProps.handleShowAlertWithParams).toHaveBeenCalledWith('Roua')
 });
});
