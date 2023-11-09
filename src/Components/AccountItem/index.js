import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountsItem.module.scss';

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://tse1.mm.bing.net/th?id=OIP.UsT-5LFmijpz79s2JIU9QgHaMN&pid=Api&P=0&h=220"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyena</span>
            </div>
        </div>
    );
}

export default AccountsItem;
