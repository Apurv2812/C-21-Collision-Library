function isTouching(chair,table){
    if (chair.x - table.x < table.width/2 + chair.width/2
      && table.x - chair.x < table.width/2 + chair.width/2
      && chair.y - table.y < table.height/2 + chair.height/2
      && table.y - chair.y < table.height/2 + chair.height/2) {
   return true
  }
  else {
   return false
  }
  }