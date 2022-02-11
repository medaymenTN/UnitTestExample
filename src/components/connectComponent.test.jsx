import { render , fireEvent} from "@testing-library/react";
import ConnectedComponent from "./ConnectedComponent";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("ConnectedComponent", () => {
    let defaultprops = {}
    const store = mockStore(
        {
            dataReducer: {
              loading: false,
              success: true,
              error: "",
              data: [
                {
                  color: "red",
                  value: "#f00",
                },
                {
                  color: "red",
                  value: "#0f0",
                },
                {
                  color: "blue",
                  value: "#00f",
                },
                {
                  color: "cyan",
                  value: "#0ff",
                },
                {
                  color: "magenta",
                  value: "#f0f",
                },
                {
                  color: "yellow",
                  value: "#ff0",
                },
                {
                  color: "black",
                  value: "#000",
                },
              ],
            },
      });
    beforeEach(()=>{
        defaultprops = {}
    })

    it('should render without crashing',()=>{
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const wrapper = render(
            <Provider store={store}>
              <ConnectedComponent />
            </Provider>
          );
          expect(wrapper).toMatchSnapshot();
          expect(wrapper).toBeDefined();
    });
     
});
