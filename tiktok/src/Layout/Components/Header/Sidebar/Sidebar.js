import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    DiscoverIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    DiscoverActiveIcon,
    LiveActiveIcon,
} from '~/Components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/Components/SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />}/>
                <MenuItem title="Discover" to={config.routes.discover} icon={<DiscoverIcon />} activeIcon={<DiscoverActiveIcon />}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />}/>
            </Menu>
            <SuggestedAccounts label='Suggested accounts'/>
            <SuggestedAccounts label='Following accounts'/>
        </aside>
    );
}

export default Sidebar;
