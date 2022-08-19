import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    height: '100%',
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#dbdbdb',
  },
  sideItem: {
    position: 'absolute',
    right: 35,
  },
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
  title: {
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
  label: {
    marginTop: 5,
    marginRight: 5,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 15,
    backgroundColor: '#bdbdbd',
    fontSize: 12,
    textTransform: 'uppercase',
    color: 'white',
  },
  commentsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comments: {
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#dbdbdb',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const createLabelWithBackbround = color =>
  StyleSheet.flatten([styles.label, {backgroundColor: color}]);

export const styledLabels = {
  aliveLabel: createLabelWithBackbround('#41cc00'),
  deadLabel: createLabelWithBackbround('#cc0000'),

  humanLabel: createLabelWithBackbround('#00ccbb'),
  alienLabel: createLabelWithBackbround('#a000cc'),

  maleLabel: createLabelWithBackbround('#0055cc'),
  femaleLabel: createLabelWithBackbround('#cc008f'),
};

export default styles;
