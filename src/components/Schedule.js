import React from "react";
import schedule from "../assets/mock-schedule";

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  checkbox(bool) {
    if (bool) {
      return "1";
    } else {
      return "0";
    }
  }
  render() {
    console.log(schedule);
    return (
      <div>
        <table>
          <tr>
            <th></th>
            <th>lunes</th>
            <th>martes</th>
            <th>miércoles</th>
            <th>jueves</th>
            <th>viernes</th>
            <th>sábado</th>
            <th>domingo</th>
          </tr>
          <tr>
            <td>mañana</td>
            <td>{this.checkbox(schedule[0].freetime[0])}</td>
            <td>{this.checkbox(schedule[1].freetime[0])}</td>
            <td>{this.checkbox(schedule[2].freetime[0])}</td>
            <td>{this.checkbox(schedule[3].freetime[0])}</td>
            <td>{this.checkbox(schedule[4].freetime[0])}</td>
            <td>{this.checkbox(schedule[5].freetime[0])}</td>
            <td>{this.checkbox(schedule[6].freetime[0])}</td>
          </tr>
          <tr>
            <td>mediodía</td>
            <td>{this.checkbox(schedule[0].freetime[1])}</td>
            <td>{this.checkbox(schedule[1].freetime[1])}</td>
            <td>{this.checkbox(schedule[2].freetime[1])}</td>
            <td>{this.checkbox(schedule[3].freetime[1])}</td>
            <td>{this.checkbox(schedule[4].freetime[1])}</td>
            <td>{this.checkbox(schedule[5].freetime[1])}</td>
            <td>{this.checkbox(schedule[6].freetime[1])}</td>
          </tr>
          <tr>
            <td>tarde</td>
            <td>{this.checkbox(schedule[0].freetime[2])}</td>
            <td>{this.checkbox(schedule[0].freetime[2])}</td>
            <td>{this.checkbox(schedule[0].freetime[2])}</td>
            <td>{this.checkbox(schedule[0].freetime[2])}</td>
            <td>{this.checkbox(schedule[0].freetime[2])}</td>
            <td>{this.checkbox(schedule[0].freetime[2])}</td>
            <td>{this.checkbox(schedule[0].freetime[2])}</td>
          </tr>
        </table>
      </div>
    );
  }
}
