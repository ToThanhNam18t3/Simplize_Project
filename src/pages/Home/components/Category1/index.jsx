import Card from '../../../../components/Card';
import bindClass from '../../../../utils/bindClass';
import Container from '../../../../components/Container';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const CardList = () => {
  return (
    <Container mt>
      <h2 className={cx('title')}>Category 1</h2>
      <div className={cx('container')}>
        <Card desc='Lorem ipsum dolor sit amet, consectetur adipisc elit,' />
        <Card desc='Lorem ipsum dolor sit amet, consectetur adipisc elit,' />
        <Card desc='Lorem ipsum dolor sit amet, consectetur adipisc elit,' />
      </div>
    </Container>
  );
};

export default CardList;
