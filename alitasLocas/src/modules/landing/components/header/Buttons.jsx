import rappiIcon from '../../../../assets/images/Rappi.webp'
import didiIcon from '../../../../assets/images/Didi.webp'
export function Buttons() {
    return (
        <div className="buttonsGeneral">
            <button className="buttonDidi">
                <img src={didiIcon} alt="Didi icon" />
                <p>Didi</p>
            </button>
            <button className="buttonRappi">
                <img src={rappiIcon} alt="Rappi icon" />
                <p>Rappi</p>
            </button>
        </div>
    )
}

/* Group 1 */

