import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#dbdbdb',
    padding: 15,
  },
  itemImage: {
    width: 150,
    height: 150,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  titleLabel: {
    flexDirection: 'row',
    marginRight: 12,
  },
  title: {
    marginRight: 8,
    fontWeight: '700',
    fontSize: 16,
  },
  author: {
    fontSize: 13,
  },
  labelView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  commentsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comments: {
    fontSize: 12,
  },
});

export const tagColors = {
  Alive: '#41cc00',
  Dead: '#cc0000',
  Human: '#00ccbb',
  Alien: '#a000cc',
  Male: '#0055cc',
  Female: '#cc008f',
  unknown: '#bdbdbd',
};

export default styles;
