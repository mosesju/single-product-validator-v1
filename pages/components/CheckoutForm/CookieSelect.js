import styles from '../../../public/styles/Home.module.css'
import CookieOption from './CookieOption'

export default function CookieSelect( { register } ) {
    console.log(register)
    return(
        <div>
            <div className={styles.selectorSpacing}>
                <select className="form-select d-block w-100" id="country" {...register("item")}>
                    <CookieOption value="Strawberry Cheesecake" name="Freebase Strawberry Cheesecake Cookie" />
                    <CookieOption value="Snickerdoodle" name="Berghain Backroom Snickerdoodle" />
                    <CookieOption value="Caramel" name="Comedown Caramel Cookie" />
                    <CookieOption value="OatmealRaisin" name="Relapse Raisin" />
                    <CookieOption value="Chocolate Chip" name="Crackhead Chocolate Chip" />
                    <CookieOption value="Surprise Me" name="Surprise Me! Variety Pack" />
                </select>
            </div>
        </div>
    )
}