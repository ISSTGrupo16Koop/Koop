import React from "react";
import esloganKoopap from "../esloganKoopap.png";
import logoKoopap from "../assets/logoKoopap.png";
import SearchBar from "./SearchBar";
import SubjectList from "./SubjectList";
import "../css/Homepage.css";
import deco from "../assets/deco.png";
import MostrarClase from "./MostrarClase";
export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.searchHome = this.searchHome.bind(this);
    this.infoClassHome = this.infoClassHome.bind(this);
    this.contractedHome = this.contractedHome.bind(this);
    this.ratedHome = this.ratedHome.bind(this);
    this.logHome = this.logHome.bind(this);
    this.endContractHome=this.endContractHome.bind(this);
  }

  endContractHome(){
    this.props.endContractApp();
  }

  searchHome(subject) {
    this.props.searchApp(subject);
  }

  infoClassHome(subject) {
    this.props.infoClassApp(subject);
  }

  contractedHome(hired) {
    this.props.contractedApp(hired);
  }
  ratedHome(val) {
    this.props.ratedApp(val);
  }

  logHome(userPass) {
    this.props.logApp(userPass);
  }

  render() {
    let list;
    if (this.props.infoClass) {
      list = (
        <MostrarClase
          classroom={this.props.classroom}
          student={this.props.userLogged}
          isLogged={this.props.isLogged}
          contractedHome={this.contractedHome}
          ratedHome={this.ratedHome}
          contracted={this.props.contracted}
          rated={this.props.rated}
          logHome={this.logHome}
          endContractHome={this.endContractHome}
        />
      );
    } else if (this.props.searching) {
      list = (
        <div>
          <div class="masbuscado">
            estas son las clases que hay de {this.props.subject.name}
          </div>
          <div>
            <SubjectList
              class="containerSub"
              infoClassHome={this.infoClassHome}
              subject={this.props.subject}
            />
          </div>
        </div>
      );
    } else if (this.props.isLogged === true) {
      list = (
        <div class="wrapper">
          <div class="masbuscado">¡encuentra TÚ profesor!</div>
          <div>
            <img src={deco} class="deco" />
          </div>
        </div>
      );
    } else {
      list = (
        <div class="wrapper">
          <div class="masbuscado">¡lo más buscado!</div>
          <div>
            <img src={deco} class="deco" />
          </div>
        </div>
      );
    }
    return (
      <div class="wrapper">
        <div class="eslogann">
          <img src={esloganKoopap} className="eslogan" />
        </div>
        <div class="flex-itemm">
          <SearchBar searchBar={this.props.searchHome} />
          <p></p>
          {list}
        </div>
      </div>
    );
  }
}

/*if (this.props.searching) {
  list = (
    <div>
      <div class="masbuscado">
        estas son las clases que hay de{" "}
        {this.props.subject[0].classlist[0].subject}
      </div>
      <div>
        <SubjectList class="containerSub" infoClassHome={this.infoClassHome} subject={this.props.subject} />
      </div>
    </div>
  );
}*/
