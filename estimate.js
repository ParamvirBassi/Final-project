
function calculate(){
    let total = 0;
    for (let i = 0; i < data.length; i++){
        let input = document.getElementById(`input${i}`).value;
        let cost = input * data[i].rate;
        total +=cost;
    }
    document.getElementById("total").innerHTML="Estimated Cost : $ "+ total.toFixed(2);
}


let data = [
    {
        name: "Landscaping Maintainence ($10/hr) ",
        rate: 10  
    },
    {
        name: "Treatment & fertilization .003 $ / Square Foot (typically 3x / year)",
        rate:0.003
    }, {


        name: "Lawn Thatching / clean up	.004 $ / Square Foot (typically done weekly)",
        rate: 0.004
    },{
        name:"Grass cutting	 .004 $ / Square Foot(typically 1x / year)",
        rate:0.004
    },{
        name:"Mulching	additional .001 / Square Foot",
        rate:0.001
    },{
        name:"Seeding	.007 $ / Square Foot	",
        rate:0.007
    },{
        name:"Aeration	.003 $ / Square Foot(typically 1x / year)",
        rate:0.003
    },{
        name:"Tree - health inspections	5 $ / Tree",
        rate:5
    },{
        name:"Tree trimming	 40 $ / Tree",
        rate:40
    },{
        name:"Shrub pruning	 10 $ / Hr",
        rate:10
    },{
        name:"Weed management  10 $ / Hr",
        rate:10
    },{
        name:"Tree removal	40 $ / Hr",
        rate:40
    },{
        name:"Landscape Construction  40 $ / Hr + Materials",
        rate:40
    },{
        name:"Decking & fencing	 40 $ / Hr + Materials",
        rate:40
    },{
        name:"Retaining walls	40 $ / Hr + Materials",
        rate:40
    },{
        name:"Brick paving & pavers	 40 $ / Hr + Materials",
        rate:40
    },{
        name:"Patios & pergolas	 40 $ / Hr + Materials",
        rate:40
    }
    ,{
        name:"Water features & ponds  50 $ / Hr + Materials",
        rate:50
    }
    ,{
        name:"Planting trees & shrubs	40 $ / Hr + Materials",
        rate:40
    }
    ,{
        name:"Artificial grass / Astroturf  40 $ / Hr + Materials",
        rate:40
    }
    ,{
        name:"Outdoor lighting / heating & firepits	 40 $ / Hr + Materials",
        rate:40
    },{
        name:"Lawn / sod installation  20 $ / Hr + Materials",
        rate:20
    }

];
for(let i=0;i<data.length;i++){
    let service=document.createElement("div");
    service.innerHTML=`<label for="input${i}">${data[i].name}</label>
    <input oninput="calculate()" id="input${i}" type="number"/>`
    document.getElementById("services").appendChild(service);

}