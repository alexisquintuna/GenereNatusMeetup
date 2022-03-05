import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          alt="rx7"
          className={classes.imglogo}
          src="https://thumbs.dreamstime.com/b/cartoon-japan-tuned-car-red-sun-background-back-view-vector-illustration-cartoon-japan-tuned-car-red-sun-background-back-123158009.jpg"
        />
        <p className={classes.titlelogo}>Genere Natus</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
