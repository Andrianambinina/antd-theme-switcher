import { useState } from "react";
import "./styles.css";
import { darkTheme, lightTheme } from "./theme";
import { ConfigProvider, Switch, Table, theme } from "antd";
import { ThemeProvider } from "@emotion/react";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = (checked: boolean) => {
    setCurrentTheme(checked ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <ConfigProvider
        theme={{
          algorithm:
            currentTheme === darkTheme
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
          // token: {
          //   colorPrimary: currentTheme.colors.primary,
          //   colorPrimaryHover: currentTheme.colors.darkPrimary,
          //   colorLink: currentTheme.colors.primary,
          //   colorBgBase: currentTheme.background.primary,
          // },
        }}
      >
        <div className="App">
          <h1>Switcher Theme</h1>

          <Switch
            checked={currentTheme === darkTheme}
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />

          <Table
            columns={[{ title: "Column", dataIndex: "col" }]}
            dataSource={[{ col: "Value 1" }]}
          />
        </div>
      </ConfigProvider>
    </ThemeProvider>
  );
}
