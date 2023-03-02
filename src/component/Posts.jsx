import React, { useEffect } from 'react'

import TimerComp from './TimerComp'
function Posts({data}) {
console.log(data);

   return (
<div>
id:   {data.id}

body:   {data.body}
title:   {data.title}

</div>
  )

   


}

export default Posts