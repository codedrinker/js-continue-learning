function integerArray() {
    var list = [1, 2, 3, 4];
    // console.log(list);
    var des = _.without(list, 1);
    // console.log(des)
}

function objectArray() {
    var list = [{
        id: 1,
        value: 1
    }, {
        id: 2,
        value: 2
    }];
    console.log(list);
    var des = _.without(list, {
        id: 1,
        value: 1
    });
    console.log(des)
}

// integerArray();
objectArray();