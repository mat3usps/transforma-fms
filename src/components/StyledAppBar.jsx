import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

import Logo from "./Logo";
import StyledBox from "../components/StyledDiv";

const PixAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #494843 30%, #FF2929 90%)",
  color: "#000000",
  height: 65,
});

const StyledAppBar = () => {
  return (
    <>
      <PixAppBar position="relative">
        <Toolbar>
          <StyledBox>
            <Button>
              <Link to="/">
                <Logo />
              </Link>
            </Button>
          </StyledBox>
        </Toolbar>
      </PixAppBar>
    </>
  );
};

export default StyledAppBar;
