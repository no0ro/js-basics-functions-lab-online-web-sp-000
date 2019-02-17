function distanceFromHqInBlocks (finishBlock) {
  let hq = 42;
  return Math.abs(finishBlock - hq)
}


function distanceFromHqInFeet (finishBlock) {
  return distanceFromHqInBlocks (finishBlock) * 264;
}



function distanceTravelledInFeet (startBlock, finishBlock) {
  return Math.abs((finishBlock - startBlock)) * 264;
}


function calculatesFarePrice (startBlock, finishBlock) {
   rawDistance = distanceTravelledInFeet(startBlock, finishBlock)

   if (rawDistance > 2500) {
    return "cannot travel that far"
  } else if (rawDistance < 2500 && rawDistance > 2000) {
    return 25
  } else {
      if (rawDistance <= 400){
        return 0
      } else { (rawDistance <= 2000)
          return (rawDistance - 400) * .02
      }
    }
  }


  // function calculatesFarePrice (start, destination) {
  //   const distance = distanceTravelledInFeet(start, destination);
  //
  //   if (distance <= 400) {
  //     return 0;
  //   } else if (distance > 400 && distance <= 2000) {
  //     return .02 * (distance - 400);
  //   } else if (distance > 2000 && distance < 2500) {
  //     return 25;
  //   } else {
  //     return 'cannot travel that far';
  //   }
  // }
