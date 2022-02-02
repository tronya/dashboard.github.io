import { render } from "@testing-library/react";
import Wrapper from "../ui/Wrapper/wrapper";

describe(Wrapper.name, () => {
  it("returns return class from the first child of the document", () => {
    const { container } = render(<Wrapper />);

    expect(container.firstChild).toHaveClass("MuiBox-root css-k008qs");
  });

  it("should find `Dashboard` title in the document", () => {
    const { getByText } = render(<Wrapper />);

    expect(getByText("Dashboard")).toBeInTheDocument();
  });
});
