import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

type Menu = {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  fourthMeal: Meal;
};
type Meal = {
  /**
   * The person/people who will coordinate this meal
   */
  credits?: string | JSX.Element;
  courses: string[];
};
export const menu: Record<string, Menu> = {
  // Thursday
  '4/14/2022': {
    breakfast: {
      courses: [''],
    },
    lunch: {
      credits: 'Self Serve',
      courses: ['BYO'],
    },
    dinner: {
      credits: (
        <span>
          Coordinated by <b>The Jim Clan</b>
        </span>
      ),
      courses: [
        'Chicken Pot Pie',
        'Vegetarian Quiche',
        'Mashed Potatoes',
        'Salad or Vegetable',
      ],
    },
    fourthMeal: {
      courses: [],
    },
  },
  // Friday
  '4/15/2022': {
    breakfast: { courses: [''] },
    lunch: {
      credits: 'Self Serve',
      courses: ['Sandwiches'],
    },
    dinner: {
      credits: (
        <span>
          Coordinated by <b>The John Clan</b>
        </span>
      ),
      courses: ['Beef Stew', 'Non-beef Stew', 'Bread & Salad'],
    },
    fourthMeal: {
      courses: [],
    },
  },
  // Saturday
  '4/16/2022': {
    breakfast: {
      courses: [''],
    },
    lunch: {
      credits: (
        <span>
          Coordinated by <b>The Tim Clan</b>
        </span>
      ),
      courses: ['Vegetarian chili with meat option on the side'],
    },
    dinner: {
      credits: (
        <span>
          Coordinated by <b>The Hway Ling Clan + Tyler & Sarah</b>
        </span>
      ),
      courses: [
        'Birthday noodle with vegetable, tofu, or chicken',
        'Fish fry',
        'Ice Cream Birthday Cake',
      ],
    },
    fourthMeal: {
      courses: [],
    },
  },
  // Sunday
  '4/17/2022': {
    breakfast: {
      courses: [''],
    },
    lunch: {
      credits: (
        <span>
          Coordinated by <b>The Tim Clan</b>
        </span>
      ),
      courses: ['Vegetarian chili with meat option on the side'],
    },
    dinner: {
      credits: (
        <span>
          Coordinated by <b>Hway Ling & Anna</b> and assisted by <b>Everyone</b>
        </span>
      ),
      courses: [
        'Assorted Jiaozi',
        ' * Lamb & Carrot',
        ' * shrimp & dziou tsai',
        ' * mushroom & egg',
        'Ba Bao Fan',
      ],
    },
    fourthMeal: {
      courses: [],
    },
  },
};
const dayOfWeek = (dateString: string) => {
  const dow = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeekIndex = new Date(dateString).getDay();

  return dow[dayOfWeekIndex];
};

/**
 * Pivot the shape of the Menu data from a "Date column" structure
 * to a "horizontal row" structure to allow easier rendering to a table layout.
 */
const menuByMeal: Record<string, Record<string, Meal>> = Object.entries(
  menu
).reduce(
  (carry, [date, menu]) => {
    carry.breakfast[date] = menu.breakfast;
    carry.lunch[date] = menu.lunch;
    carry.dinner[date] = menu.dinner;
    carry.fourthMeal[date] = menu.fourthMeal;
    return carry;
  },
  { breakfast: {}, lunch: {}, dinner: {}, fourthMeal: {} }
);

export const MealsPage = (props) => {
  return (
    <Layout title="Meals" description="Reunion Home Base">
      <main>
        <section>
          <div className={clsx('container', styles.calloutBox)}>
            <div className={clsx('container', styles.shoppingListLink)}>
              <h2>We have a shared shopping list!</h2>
              <ol>
                <li>
                  1){' '}
                  <Link href="https://www.getbring.com/en/home">
                    Download the app
                  </Link>
                </li>
                <li>
                  2){' '}
                  <Link href="https://go.getbring.com/jx5QpgeTiqedPQh37">
                    ...then use this link to add to the shared list
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section>
          <div className={clsx('container', styles.mealPlan)}>
            <table>
              <thead>
                <tr>
                  <th>
                    {/* This cell is intentionally empty (upper-leftmost cell) */}
                  </th>
                  {Object.keys(menu).map((date) => (
                    <th key={date}>
                      <div>{dayOfWeek(date)}</div>
                      <div className={styles.columnDate}>{date}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(menuByMeal).map(
                  ([mealName, mealsByDate], idx) => (
                    <tr key={idx}>
                      <td className={styles.mealName}>{mealName}</td>
                      {Object.values(mealsByDate).map((meal, idx) => (
                        <td key={idx}>
                          <div className={styles.mealCredits}>
                            {meal.credits}
                          </div>
                          <div>
                            <ul className={styles.courseList}>
                              {meal.courses.map((course, idx) => (
                                <li key={idx} className={styles.course}>
                                  {course}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default MealsPage;
