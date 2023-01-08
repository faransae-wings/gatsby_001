import React, { useCallback, useMemo, useRef, useState } from 'react';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import Layout from '@/components/layout';
import CallToActionOne from '@/components/call-to-action-one';
import Footer from '@/components/footer';
import BlogHome from '@/components/blog-home';
import ParallaxOne from '@/components/parallax-1';
import ClientCarouselOne from '@/components/client-carousel-one';
import TeamCarousel from '@/components/team-carousel';
import FunfactOne from '@/components/funfact-one';
import TrustedClient from '@/components/trusted-client';
import PortfolioHome from '@/components/portfolio-home';
import SubscribeForm from '@/components/subscribe-form';
import ServiceTwo from '@/components/service-two';
import AboutTwo from '@/components/about-two';
import VideoTwo from '@/components/video-two';
import HeaderOne from '@/components/header-one';
import SearchContextProvider from '@/context/search-context';
import MenuContextProvider from '@/context/menu-context';
import SliderOne from '@/components/slider-one';

// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { localeKey } from '../lib/localeKey';

import 'ag-grid-enterprise';
import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import 'ag-grid-enterprise/dist/styles/ag-theme-alpine.css';

import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import { LicenseManager } from 'ag-grid-enterprise';
import { Col, Row } from 'react-bootstrap';

import ValidationSample from '../test/ValidationSample';
import ScollBox from '../test/ScrollBox';
import IterationSample from '../test/IterationSample';
import Info from '../test/Info';
import Average from '../test/Average';
import StyledComponent from '../test/StyledComponent';
import App from '../test/App';

LicenseManager.setLicenseKey(
  'DownloadDevTools_COM_NDEwMjM0NTgwMDAwMA==59158b5225400879a12a96634544f5b6',
);

const HomeOne = () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 1400, pv: 1400, amt: 1400 },
    { name: 'Page C', uv: 400, pv: 2400, amt: 2400 },
  ];

  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    // set filters
    { field: 'athlete', filter: true },
    { field: 'country', filter: 'agSetColumnFilter' },
    // number filters
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const [box, setBox] = useState(null);
  const [visible, setVisible] = useState(true);

  // const validate = () => {
  //   // var input = document.getElementById('password');
  //   // input.className = '';
  //   // if (input.value === '0000') {
  //   //     input.className = 'success';
  //   // } else {
  //   //     input.className = 'failure';
  //   // }
  //   setClicked(true);
  //   setValidated(password === '0000');
  // }

  // const [password, setPassword] = useState('');
  // const [clicked, setClicked] = useState(false);
  // const [validated, setValidated] = useState(false);

  // const handleChange = (e) => {
  //   setPassword(e.target.value);
  // }

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="와글와글">
          {/* <input type='password' value={password} onChange={handleChange}
            className={clicked ? (validated ? 'success':'failure') : ''}></input>
          <button onClick={validate}>Validate</button> */}

          <HeaderOne />
          <SliderOne />

          {/* <ValidationSample />
          <ScollBox ref={(ref) => setBox(ref)} />
          <button onClick={() => box.scrollToBottom()}>맨 밑으로</button> */}

          {/* <IterationSample /> */}

          <hr />

          <App />

          <hr />

          <StyledComponent />
          {/* <div>Hello!!!</div> */}

          <hr />

          {visible && <Average />}
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '숨기기' : '보이기'}
          </button>

          <hr />

          <Row>
            <Col>
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </Col>
            <Col>
              <div
                className="ag-theme-alpine"
                style={{ height: 300, width: '100%', paddingRight: 30 }}
              >
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  onGridReady={onGridReady}
                ></AgGridReact>
              </div>
            </Col>
          </Row>

          <hr />

          {/* <ServiceTwo /> */}
          <AboutTwo />
          <VideoTwo />
          <SubscribeForm />
          <PortfolioHome />
          <FunfactOne />
          <TrustedClient />
          <TeamCarousel />
          <ClientCarouselOne />
          <ParallaxOne />
          <BlogHome />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
