function twoSum(number, target) {
    var map = [];
    var indexnum = [];
    
    for (var i = 0; i < number.length; i++)
    {
    if (map[number[i]] != null)
    {
    var index = map[number[i]];
    indexnum[0] = index;
    indexnum[1] = i;
    break;
    }
    else
    {
    map[target- number[i]] = i;
    }
    }
    return indexnum;
    }
  console.log(twoSum([10,20,10,40,50,60,70],60));
 