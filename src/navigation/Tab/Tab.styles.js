import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 25,
    paddingVertical: 13,
    backgroundColor: '#5955DE',
  },
  item: {flex: 1, alignItems: 'center'},
  focusColor: '#FFF',
  inactiveColor: '#9C97F3',
  getTextColor: function (isActive) {
    return {
      color: isActive ? this.focusColor : this.inactiveColor,
      fontSize: 12,
    };
  },
});

export default styles;
