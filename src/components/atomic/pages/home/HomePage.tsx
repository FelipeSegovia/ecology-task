import { useEffect } from 'react';
import PAGE_TITLE from '../../../../constants/pageTitle.ts';
import CardEcology from '../../molecules/cardEcology/CardEcology.tsx';
import './homePage.css';
import { DATA } from './data.ts';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();

  // Add title section in tab
  useEffect(() => {
    document.title = PAGE_TITLE.HOME;
  }, []);

  const navigateCategory = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <h1>{DATA.title}</h1>
      <div className={'container-ecology'}>
        {DATA.categories.map((category, index) => (
          <CardEcology
            key={index}
            labelBtn={'Ingresar'}
            headerCard={category.title}
            clickBtn={() => navigateCategory(category.route)}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
