import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

var cell_w = Dimensions.get('window').width;
var styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    tabbarContainer:{
        flex: 1,
    },
    bgColor: {
        backgroundColor: '#F5FCFF'
    },
    mgt5: {
        marginTop: 5,
    },
    mgb5: {
        marginBottom: 5,
    },
    pdt5: {
        paddingTop: 5,
    },
    pdb5: {
        paddingBottom: 5,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
    textAli: {
        textAlign: 'right',
    },
    navbar: {
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.1,
    },
    justAlign: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    viewList: {
        padding: 10,
        fontSize: 15,
    },
    flexRow: {
        flexDirection: 'row',
    },
    flex1: {
        flex: 1,
    }
    
});
export default styles;