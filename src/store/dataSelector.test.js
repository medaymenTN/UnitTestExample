import { getRedColorItems } from "./dataSelector";
describe("dataSelector", () => {
  const state = {
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
  };

  it("should return list of red colors when success is true", () => {
    const result = getRedColorItems(state);
    expect(result).toEqual([
      {
        color: "red",
        value: "#f00",
      },
      {
        color: "red",
        value: "#0f0",
      },
    ]);
  });
  it("should return empty array of red colors when success is false", () => {
    const result = getRedColorItems({
      ...state,
      dataReducer: {
        ...state.dataReducer,
        success: false,
      },
    });
    expect(result).toEqual([]);
  });
});
