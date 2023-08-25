import { Avatar, Button } from '@mui/material';
import styles from './store-merchandise.module.scss';

/* eslint-disable-next-line */
export interface StoreMerchandiseProps {
  title: string;
  avatar: string;
  name: string;
  active: boolean;
}

export function StoreMerchandise(props: StoreMerchandiseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StoreMerchandise!</h1>
      {props.title && (
        <Button
          variant="contained"
          disabled={!props.active}
          onClick={() => console.log('saludo')}
        >
          {props.title}
        </Button>
      )}
      {props.avatar && props.name && (
        <Avatar alt={props.name} src={props.avatar} />
      )}
    </div>
  );
}

export default StoreMerchandise;
