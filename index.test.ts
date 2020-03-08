import request from 'supertest';
import app from '.';

const PREPARE_LIMIT = 50 * 1000;
const OVERALL_LIMIT = PREPARE_LIMIT + 20 * 1000;

jest.retryTimes(3);

it(
  'renders home',
  async () => {
    const response = await request(app)
      .get('/?from=\\sum')
      .redirects(1);

    expect(response.body.toString()).toEqual(`<?xml version="1.0" standalone="no" ?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg style="vertical-align: -1.018ex" xmlns="http://www.w3.org/2000/svg" width="3.267ex" height="3.167ex" role="img" focusable="false" viewBox="0 -950 1444 1400"><g stroke="currentColor" fill="black" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="2211" d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z"></path></g></g></g></svg>`);
  },
  OVERALL_LIMIT,
);
