import Styles from "./App.less"; 
import quip from "quip";



const { getRootRecord } = quip.apps;

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        myPlan: getRootRecord().get('myPlan')
      };
    }

    state = {
        devName: '',
        pmName: ''
    }

    render() {
        
    return <div className={Styles.container}>
    {
        <div>
            <div className={Styles.h1}>Plan</div>
            <div className={Styles.h2}>Topics</div>

            <table className={Styles.tableau}>
                <tbody>
                    <tr>
                        <td className={Styles.colonne}><input name="SPE 1" type="checkbox" value="1" />&nbsp;SPE 1</td>
                        <td className={Styles.colonne}><input name="SPE 3" type="checkbox" value="3" />&nbsp;SPE 3</td>
                    </tr>
                    <tr>
                        <td className={Styles.colonne}><input name="SPE 2" type="checkbox" value="2" />&nbsp;SPE 2</td>
                        <td className={Styles.colonne}><input name="SPE 4" type="checkbox" value="4" />&nbsp;SPE 4</td>
                    </tr>
                </tbody>
            </table>

            <div className={Styles.h2}>Personas</div>

            <table className={Styles.tableau}>
                <tbody>
                    <tr>
                        <td className={Styles.colonne}><input name="Developer" type="checkbox" value="Dev" />&nbsp;Developer</td>
                        <td className={Styles.colonne}><input name="SE" type="checkbox" value="SE" />&nbsp;SE</td>
                    </tr>
                    <tr>
                        <td className={Styles.colonne}><input name="Architect" type="checkbox" value="Architect" />&nbsp;Architect</td>
                        <td className={Styles.colonne}><input name="PM" type="checkbox" value="PM" />&nbsp;PM</td>
                    </tr>
                    <tr>
                        <td className={Styles.colonne}><input name="DevOps" type="checkbox" value="DevOps" />&nbsp;DevOps</td>
                        <td className={Styles.colonne}><input name="..." type="checkbox" value="..." />&nbsp;...</td>
                    </tr>
                </tbody>
            </table>

            <button
            className={Styles.submit}
            onClick={this.handleSubmit}>
            Generate Plan
          </button>

            <label class="label">Developer</label>
            <div class="control">
                <input class="input" type="text" placeholder="Name of the Dev" value={this.state.devName} />
            </div>

            <table border="0" cellpadding="0" cellspacing="0" styleName={{width:'300px'}}>
                <thead>
                    <tr>
                        <th scope="col" styleName={{textAlign: 'left'}}>Trailmix</th>
                        <th scope="col" styleName={{textAlign: 'left'}}>Phase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td styleName={{width: '150px'}}>Core Dev</td>
                        <td styleName={{width: '150px'}}><select name="Phase" size="1"><option selected="selected" value="Phase 1">Phase 1</option><option value="Phase 2">Phase 2</option><option value="Phase 3">Phase 3</option><option value="Phase 4">Phase 4</option></select></td>
                    </tr>
                    <tr>
                        <td>SPE 2</td>
                        <td><select name="Phase" size="1"><option value="Phase 1">Phase 1</option><option value="Phase 2">Phase 2</option><option selected="selected" value="Phase 3">Phase 3</option><option value="Phase 4">Phase 4</option></select></td>
                    </tr>
                </tbody>
            </table>

            <label class="label">PM</label>
            <div class="control">
                <input class="input" type="text" placeholder="Name of the PM" value={this.state.pmName} />
            </div>

            <table border="0" cellpadding="0" cellspacing="0" styleName={{width:'300px'}}>
                <thead>
                    <tr>
                        <th scope="col" styleName={{textAlign: 'left'}}>Trailmix</th>
                        <th scope="col" styleName={{textAlign: 'left'}}>Phase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Core PM</td>
                        <td><select name="Phase" size="1"><option value="Phase 1">Phase 1</option><option selected="selected" value="Phase 2">Phase 2</option><option value="Phase 3">Phase 3</option><option value="Phase 4">Phase 4</option></select></td>
                    </tr>
                </tbody>
            </table>
            <button
            className={Styles.submit}
            onClick={this.handleSubmit}>
            Generate DynDashboard
          </button>
        </div>
    }
    </div>;
    }
}
