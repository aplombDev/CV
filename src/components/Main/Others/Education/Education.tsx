import { FC } from "react";
import EducationBlock from "@/components/Main/Others/Education/EducationBlock";
import styles from "./Education.module.scss";

const Education: FC = (props) => {
    return (
        <section className={styles.education}>
            <div className={styles.educationListContainer}>
                <ul className={styles.educationBlockList}>
                    <li>
                        <EducationBlock
                            date="From Oct 2019 to Aug 2025"
                            location="Sankhamul, kathmandu"
                            text="Bachelors of Computer Information System"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Education;
