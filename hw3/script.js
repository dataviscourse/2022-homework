// Constants for the charts, that would be useful.
const CHART_WIDTH = 500;
const CHART_HEIGHT = 250;
const MARGIN = { left: 50, bottom: 20, top: 20, right: 20 };
const ANIMATION_DUATION = 300;

setup();

function setup () {

  // Fill in some d3 setting up here if you need
  // for example, svg for each chart, g for axis and shapes

  changeData();
}

/**
 * Render the visualizations
 * @param data
 */
function update (data) {

  // ****** TODO ******


  // Syntax for line generator.
  // when updating the path for line chart, use the function as the input for 'd' attribute.
  // https://github.com/d3/d3-shape/blob/main/README.md


  // const lineGenerator = d3.line()
  //   .x(d => the x coordinate for a point of the line)
  //   .y(d => the y coordinate for a point of the line);

  // Syntax for area generator.
  // the area is bounded by upper and lower lines. So you can specify x0, x1, y0, y1 seperately. Here, since the area chart will have upper and lower sharing the x coordinates, we can just use x(). 
  // Similarly, use the function as the input for 'd' attribute. 

  // const areaGenerator = d3.area()
  //   .x(d => the x coordinates for upper and lower lines, both x0 and x1)
  //   .y1(d => the y coordinate for the upper line)
  //   .y0(d=> the base line y coordinate for the area);


  //Set up scatter plot x and y axis. 
  //Since we are mapping death and case, we need new scales instead of the ones above. 
  //Cases would be the horizontal axis, so we need to use width related constants.
  //Deaths would be vertical axis, so that would need to use height related constants.


  //TODO 
  // call each update function below, adjust the input for the functions if you need to.
}

/**
 * Update the bar chart
 */

function updateBarChart () {

}

/**
 * Update the line chart
 */
function updateLineChart () {

}

/**
 * Update the area chart 
 */
function updateAreaChart () {

}

/**
 * update the scatter plot.
 */

function updateScatterPlot () {

}


/**
 * Update the data according to document settings
 */
function changeData () {
  //  Load the file indicated by the select menu
  const dataFile = d3.select('#dataset').property('value');

  d3.csv(`data/${dataFile}.csv`)
    .then(dataOutput => {

      /**
       * D3 loads all CSV data as strings. While Javascript is pretty smart
       * about interpreting strings as numbers when you do things like
       * multiplication, it will still treat them as strings where it makes
       * sense (e.g. adding strings will concatenate them, not add the values
       * together, or comparing strings will do string comparison, not numeric
       * comparison).
       *
       * We need to explicitly convert values to numbers so that comparisons work
       * when we call d3.max()
       **/

      const dataResult = dataOutput.map((d) => ({
        cases: parseInt(d.cases),
        deaths: parseInt(d.deaths),
        date: d3.timeFormat("%m/%d")(d3.timeParse("%d-%b")(d.date))
      }));
      if (document.getElementById('random').checked) {
        // if random subset is selected
        update(randomSubset(dataResult));
      } else {
        update(dataResult);
      }
    }).catch(e => {
      console.log(e);
      alert('Error!');
    });
}

/**
 *  Slice out a random chunk of the provided in data
 *  @param data
 */
function randomSubset (data) {
  return data.filter((d) => Math.random() > 0.5);
}
