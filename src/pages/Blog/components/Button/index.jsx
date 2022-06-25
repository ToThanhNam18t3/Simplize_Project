import bindClass from '../../../../utils/bindClass';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const Button = () => {
  return (
    <div className={cx('container')}>
      <button className={cx('btn')}>Tất cả</button>
      <button className={cx('btn')}>Category 1</button>
      <button className={cx('btn')}>Category 2</button>
      <button className={cx('btn')}>Category 3</button>
      <button className={cx('btn')}>Category 4</button>
      <button className={cx('btn')}>Category 5</button>
    </div>
  );
};

export default Button;
