import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FaDog } from "react-icons/fa6";
import { HiMiniHome } from "react-icons/hi2";
import { RxComponent2 } from "react-icons/rx";
import { GiHollowCat } from "react-icons/gi";

export const MenuItens = () => {

    const listItens = [
        {
            name: 'Home',
            path: '/',
            icon: <HiMiniHome />,
        },
        {
            name: 'Gatos',
            path: 'gato',
            icon: <GiHollowCat />,
        }

    ]


    return (
        <List>
            {listItens.map((item) => (
                <ListItem
                    disablePadding
                    key={item.name}
                    onClick={() =>
                        window.location.replace(item.path)
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        {item.name}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}