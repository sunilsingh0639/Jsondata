import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{

 firstFive : any;
last : any;

  constructor () {

    const jsonData = [

      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      { name : 'sam'  },
      
      
        ]

        const data = jsonData.filter((item , index) => index < 5)
        console.log(data)
        this.firstFive = data;

        const value = jsonData.filter((item , index) => index > 7)
        this.last = value
        console.log(this.last)

  }


  ngOnInit(): void {

    
    
  }

  

}
