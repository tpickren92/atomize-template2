import React from "react"
import { Div, Text, Tag, Switch, Label } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const SwitchDocs1 = `// Basic Switches
import { Switch, Label } from "atomize";

class Switches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSwitchValue1: false,
      selectedSwitchValue2: false
    };
  }

  render() {
    const { selectedSwitchValue1, selectedSwitchValue2 } = this.state;
    return (
      <Label
        onClick={() =>
          this.setState({ selectedSwitchValue1: !selectedSwitchValue1 })
        }
        align="center"
        textWeight="600"
        m={{ b: "1rem" }}
        >
          <Switch
            checked={selectedSwitchValue1}
          />
          Normal Switch
      </Label>
    );
  }
}`

const SwitchDocs2 = `// Styling Switch
import { Switch, Label } from "atomize";

class Switches extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selectedSwitchValue: false
      };
    }

    render() {
        const { selectedSwitchValue } = this.state;

        return (
            <Label
              onClick={() =>
                this.setState({ selectedSwitchValue3: !selectedSwitchValue3 })
              }
              align="center"
              textWeight="600"
              m={{ b: "1rem" }}
              >
              <Switch
                checked={selectedSwitchValue}
                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
              />
              Styled Switch
            </Label>
        );
    }
}`

const SwitchDocs3 = `// Loading Switch
import { Switch, Label } from "atomize";

class Switches extends React.Component {
    render() {
        return (
            <Label align="center" textWeight="600" m={{ b: "1rem" }}>
              <Switch isLoading />
              Styled Switch
            </Label>
        );
    }
}`

class SwitchDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: SwitchDocs1,
      selectedSwitchValue1: false,
      selectedSwitchValue2: false,
      selectedSwitchValue3: false,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const {
      selectedCode,
      selectedSwitchValue1,
      selectedSwitchValue2,
      selectedSwitchValue3,
    } = this.state

    return (
      <>
        <InfoCodeRow id="switchDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Switch
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            Switch works exactly like checkbox, except it can only be managed
            through state.
          </Text>
          <Div pos="relative" m={{ b: "1rem" }} m={{ b: "4rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={SwitchDocs1}
              selectedValue={selectedCode}
            />
            <Label
              onClick={() =>
                this.setState({ selectedSwitchValue1: !selectedSwitchValue1 })
              }
              align="center"
              textWeight="600"
              m={{ b: "1rem" }}
            >
              <Switch checked={selectedSwitchValue1} />
              Normal Switch
            </Label>
          </Div>

          <Div pos="relative" m={{ b: "1rem" }} m={{ b: "4rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={SwitchDocs2}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              You can style the active and inactive state of switch by using{" "}
              <Tag>{"activeColor"}</Tag>, <Tag>{"inactiveColor"}</Tag>,{" "}
              <Tag>{"activeShadow"}</Tag> & <Tag>{"inactiveShadow"}</Tag>.
            </Text>
            <Label
              onClick={() =>
                this.setState({ selectedSwitchValue3: !selectedSwitchValue3 })
              }
              align="center"
              textWeight="600"
              m={{ b: "1rem" }}
            >
              <Switch
                checked={selectedSwitchValue3}
                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
              />
              Styled Switch
            </Label>
          </Div>
          <Div pos="relative" m={{ b: "1rem" }} m={{ b: "4rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={SwitchDocs3}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              <Tag>{"isLoading"}</Tag> can be passed for the loading state of
              the switch.
            </Text>
            <Label align="center" textWeight="600" m={{ b: "1rem" }}>
              <Switch isLoading />
              Loading Switch
            </Label>
          </Div>

          <AvailableProps
            defaultProps={{
              isLoading: "false",
              disabled: "false",
              cursor: "pointer",
              m: '{ r: "1rem" }',
              activeColor: "info700",
              inactiveColor: "gray500",
              activeShadow: "4",
              inactiveShadow: "0",
            }}
            available={[
              "isLoading",
              "disabled",
              "activeColor",
              "inactiveColor",
              "activeShadow",
              "inactiveShadow",
              "m",
              "cursor",
            ]}
          />
        </InfoCodeRow>
      </>
    )
  }
}

export default SwitchDocs
