
'use strict';

const xml2js = require('xml2js');

module.exports = (adapter) => {
    xml2js.parseString(adapter.config.xmlTpyData, (err, jsonTpyData) => {
        if (err) {
            adapter.log.error(`Parsing of XML Data of *.tpy occured an Error: ${err}`);

            return;
        }

        console.log(JSON.stringify(jsonTpyData));
    });
};

const data = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
    '<!--This file is created by the TCatPlcCtrl automatically. Manually changes will be overwritten!-->\n' +
    '<PlcProjectInfo xmlns:p="http://www.beckhoff.com/2002/01/TcPlcProjectDesc">\n' +
    '\t<ProjectInfo>\n' +
    '\t\t<Path>C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\Poolsteuerung_BX.prx</Path>\n' +
    '\t\t<IsLibrary>false</IsLibrary>\n' +
    '\t\t<Author>Kleber Dietmar</Author>\n' +
    '\t\t<ChangeDate>2019-02-19T21:57:05</ChangeDate>\n' +
    '\t\t<Library>\n' +
    '\t\t\t<Name>TcBaseBCxx50.lbx</Name>\n' +
    '\t\t\t<Path>C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx</Path>\n' +
    '\t\t\t<ChangeDate>2007-03-29T07:21:36</ChangeDate>\n' +
    '\t\t</Library>\n' +
    '\t\t<Library>\n' +
    '\t\t\t<Name>TcSystemBCxx50.lbx</Name>\n' +
    '\t\t\t<Path>C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx</Path>\n' +
    '\t\t\t<ChangeDate>2012-12-07T12:46:22</ChangeDate>\n' +
    '\t\t</Library>\n' +
    '\t\t<Library>\n' +
    '\t\t\t<Name>STANDARD.LBX</Name>\n' +
    '\t\t\t<Path>C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX</Path>\n' +
    '\t\t\t<ChangeDate>2003-12-05T09:02:30</ChangeDate>\n' +
    '\t\t</Library>\n' +
    '\t\t<Library>\n' +
    '\t\t\t<Name>TcBaseBX9000.lbx</Name>\n' +
    '\t\t\t<Path>C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx</Path>\n' +
    '\t\t\t<ChangeDate>2008-04-30T09:54:26</ChangeDate>\n' +
    '\t\t</Library>\n' +
    '\t</ProjectInfo>\n' +
    '\t<RoutingInfo>\n' +
    '\t\t<AdsInfo>\n' +
    '\t\t\t<NetId>192.168.0.252.1.1</NetId>\n' +
    '\t\t\t<Port>800</Port>\n' +
    '\t\t\t<TargetName>\n' +
    '\t\t\t\t<![CDATA[Target: BC/BX BX_02035C (192.168.0.252.1.1), Port: 800]]>\n' +
    '\t\t\t</TargetName>\n' +
    '\t\t</AdsInfo>\n' +
    '\t</RoutingInfo>\n' +
    '\t<CompilerInfo>\n' +
    '\t\t<CpuFamily>80C16x</CpuFamily>\n' +
    '\t\t<CompilerVersion>2.9.10.0</CompilerVersion>\n' +
    '\t\t<Alignment>Word</Alignment>\n' +
    '\t\t<PackSize>2</PackSize>\n' +
    '\t\t<TwinCATVersion>2.11.0</TwinCATVersion>\n' +
    '\t\t<TCatPlcCtrlVersion>2.11.1514</TCatPlcCtrlVersion>\n' +
    '\t</CompilerInfo>\n' +
    '\t<TargetInfo>\n' +
    '\t\t<CpuFamily>80C16x</CpuFamily>\n' +
    '\t\t<DataAreaInfo>\n' +
    '\t\t\t<DataSize>524288</DataSize>\n' +
    '\t\t\t<RetainSize>2048</RetainSize>\n' +
    '\t\t\t<MAreaSize>4096</MAreaSize>\n' +
    '\t\t\t<InputSize>2048</InputSize>\n' +
    '\t\t\t<OutputSize>2048</OutputSize>\n' +
    '\t\t\t<MaxNumOfPOUs>512</MaxNumOfPOUs>\n' +
    '\t\t</DataAreaInfo>\n' +
    '\t</TargetInfo>\n' +
    '\t<TaskInfos>\n' +
    '\t\t<TaskInfo>\n' +
    '\t\t\t<Name>Standard</Name>\n' +
    '\t\t\t<Priority>0</Priority>\n' +
    '\t\t\t<CycleTime>20</CycleTime>\n' +
    '\t\t\t<CycleTimeUs>20000</CycleTimeUs>\n' +
    '\t\t\t<Calls>\n' +
    '\t\t\t\t<ProgramCall>prgMain</ProgramCall>\n' +
    '\t\t\t</Calls>\n' +
    '\t\t</TaskInfo>\n' +
    '\t</TaskInfos>\n' +
    '\t<DirectoryInfos>\n' +
    '\t\t<DirectoryInfo>\n' +
    '\t\t\t<Type>LibraryDir</Type>\n' +
    '\t\t\t<Path>C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\</Path>\n' +
    '\t\t</DirectoryInfo>\n' +
    '\t\t<DirectoryInfo>\n' +
    '\t\t\t<Type>LibraryDir</Type>\n' +
    '\t\t\t<Path>C:\\TwinCAT\\PLC\\LIB\\</Path>\n' +
    '\t\t</DirectoryInfo>\n' +
    '\t\t<DirectoryInfo>\n' +
    '\t\t\t<Type>CompileDir</Type>\n' +
    '\t\t\t<Path>C:\\TwinCAT\\PLC\\</Path>\n' +
    '\t\t</DirectoryInfo>\n' +
    '\t</DirectoryInfos>\n' +
    '\t<DataTypes>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100C6A16" Crc32="2948153899" LastChange="2018-06-24T21:15:34">fb2Switch1Dim</Name>\n' +
    '\t\t\t<BitSize>432</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sTrigInput</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Input Flag Memory]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sDimTon</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Time Delay for Dim Function Block]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sSwitch2</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Time Delay for 2. Switch Block]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sDimDirectionUp</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Dim Direction?]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tTrigInput</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>312</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iInput</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Switch Input]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iSwitchDimTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Time Delay for dim Function]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iSwitch2Time</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Time Delay for 2. Switch]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>368</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oSwitch1</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Switch 1 Edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>400</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oSwitch2</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Switch 2 Edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>408</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oDimUp</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Dim Up active]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oDimDown</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Dim Down active]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>424</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>308</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>309</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100B54D0" Crc32="2815286794" LastChange="2018-06-24T21:15:34">fbBoiler</Name>\n' +
    '\t\t\t<BitSize>288</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sPowerSwitchTrigger</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sCounter</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iAverageMeterPower</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iOffPoint</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iPowerSwitchTriggerTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iAktiv</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oPowerLevel1</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>248</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oPowerLevel2</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>256</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oPowerLevel3</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>264</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oPowerLevel4</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>272</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oPowerLevel5</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>280</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>310</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>311</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="2001024A">ARRAY [1..260] OF BYTE</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Modbus Write Buffer]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<BitSize>2080</BitSize>\n' +
    '\t\t\t<ArrayInfo>\n' +
    '\t\t\t\t<LBound>1</LBound>\n' +
    '\t\t\t\t<Elements>260</Elements>\n' +
    '\t\t\t</ArrayInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="101B94C0" Crc32="2215207562" LastChange="2019-02-19T21:54:47">fbMeterModCommunication</Name>\n' +
    '\t\t\t<BitSize>6320</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sTimeReq</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Time request trigger]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sMeterPowerReq</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Power Value request trigger]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sTimeReqFlag</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[New Time request necessary]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sMeterPowerReqFlag</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[New Power Value request necessary]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>296</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sBufferTimeReady</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Write Buffer for Time request ready]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sBufferMeterPowerReady</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Write Buffer for Power Value request ready]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>312</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sModState</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[10...Connecting;20...Read ;30...Disconnecting;40...Waiting]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sModConnect</Name>\n' +
    '\t\t\t\t<Type Decoration="100C6CAD">FB_MBConnect</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Modbus Connecting Block]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>336</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sModCommunication</Name>\n' +
    '\t\t\t\t<Type Decoration="100F373A">FB_MBGenericReq</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Modbus Request Block]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>288</BitSize>\n' +
    '\t\t\t\t<BitOffs>672</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sModDisconnect</Name>\n' +
    '\t\t\t\t<Type Decoration="100B271B">FB_MBClose</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Modbus close Connection Block]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>208</BitSize>\n' +
    '\t\t\t\t<BitOffs>960</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sFunctionCode</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Modbus function Code]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1168</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sReqAddress</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Modbus request Index]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>1184</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sReqQuantity</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Modbus request Quantity]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>1200</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sWriteBuffer</Name>\n' +
    '\t\t\t\t<Type Decoration="2001024A">ARRAY [1..260] OF BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Modbus Write Buffer]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>2080</BitSize>\n' +
    '\t\t\t\t<BitOffs>1216</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sReadBuffer</Name>\n' +
    '\t\t\t\t<Type Decoration="2001024A">ARRAY [1..260] OF BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Modbus Read Buffer]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>2080</BitSize>\n' +
    '\t\t\t\t<BitOffs>3296</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sUnitID</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>5376</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tRawDT</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>5392</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tRealMeterPower</Name>\n' +
    '\t\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>5424</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tPointer</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>5456</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iRequest</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Establishing the Connection required?]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>5488</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iIPAddress</Name>\n' +
    '\t\t\t\t<Type Decoration="40000051">STRING(80)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[IP-Adress from the Fronius Datamanager]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>648</BitSize>\n' +
    '\t\t\t\t<BitOffs>5496</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Timeout for Establishing the Connection to Meter]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>6144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oCommunicationError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Communication Error detected]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>6176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oTime</Name>\n' +
    '\t\t\t\t<Type>DT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Actual Time for Sync]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>6192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oMeterPower</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Actual Power Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>6224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="InOut">ioNewTime</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[New Actual Time for Sync ready]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>6256</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="InOut">ioNewValue</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[New Actual Power Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>6288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>314</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>315</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10095ACD" Crc32="0368167725" LastChange="2018-06-24T21:15:34">fbMeterPowerCompany</Name>\n' +
    '\t\t\t<BitSize>336</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sPositiveEdgeFlag</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Helping Flag for the Positive Edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sPositiveEdgeOk</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Positive Edge OK]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sOldCompletePowerConsumption</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sPulseCounter1min</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Pulse Counter 1 Minute]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sTimer1min</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Timer 1min Pulse]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iPulse</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Pulse from the Meter]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iNewCompletePowerConsumption</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[New Value for Complete Power Consumption Adjustment]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oCompletePowerConsumption</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Complete Power Consumption]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>272</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oCurrentPowerConsumption</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Current Power Cosumption]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>316</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>317</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="20010313">ARRAY [1..480] OF DINT</Name>\n' +
    '\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Memory Array]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<BitSize>15360</BitSize>\n' +
    '\t\t\t<ArrayInfo>\n' +
    '\t\t\t\t<LBound>1</LBound>\n' +
    '\t\t\t\t<Elements>480</Elements>\n' +
    '\t\t\t</ArrayInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100D5422" Crc32="4208527830" LastChange="2018-06-24T21:15:34">fbMovingAverage</Name>\n' +
    '\t\t\t<BitSize>15552</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sMemory</Name>\n' +
    '\t\t\t\t<Type Decoration="20010313">ARRAY [1..480] OF DINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Memory Array]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>15360</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sMemoryPointer</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Pointer on next write Point]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>15360</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sReset</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Reset flag memory]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>15376</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sTrigger</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Trigger flag memory]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>15384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tReset</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>15392</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tTrigger</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>15400</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tFor</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>15408</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tSum</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>15424</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iMemoryMaxSize</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Value of saved Values for moving average (max. 480)]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>15456</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iReset</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Reset Memory]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>15472</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iTrigger</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[New Value available]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>15480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iValue</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>15488</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oAverage</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Moving average over all Values]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>15520</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>318</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>319</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10165255" Crc32="0803794605" LastChange="2018-06-24T21:15:34">fbPool</Name>\n' +
    '\t\t\t<BitSize>1168</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sMassageOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sHydroFlowOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sValveClose</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sValveOpen</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sInverterVoltageOn</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TOF</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sInverterError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sSwitch</Name>\n' +
    '\t\t\t\t<Type Decoration="100C6A16">fb2Switch1Dim</Type>\n' +
    '\t\t\t\t<BitSize>432</BitSize>\n' +
    '\t\t\t\t<BitOffs>464</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iAirPressureSwitch</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>896</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iInverterErrorInput</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>904</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iSwitchDimTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>912</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iValveCloseDelay</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>944</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iValveMotionDelay</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>976</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iInverterVoltageDelay</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1008</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iTargetValueSteps</Name>\n' +
    '\t\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1040</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iSwitch2Time</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1072</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iAcknowledge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1104</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oValveHydroFlowOpen</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oValveMassageOpen</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1120</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oInverterVoltageOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oInverterEnable</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1136</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oInverterTargetValue</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oInverterError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1152</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>320</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>321</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="1016A0A7" Crc32="1826734206" LastChange="2018-06-24T21:15:34">Parameter</Name>\n' +
    '\t\t\t<BitSize>464</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>MinTimeDayFilterpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>MaxTimeDayFilterpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>MinTermFilterpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>MinTimeDayWFilterpump</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>StartThresholdFilterpump</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>StopHystereseFilterpump</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>TargetValueFilterpumpAutomatik</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>TargetValueFilterpumpManual</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>152</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>OffPointBoiler</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>PowerMovingAverageTimeBoiler</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>TimeDelaySumppumpStop</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>TimeDelayWaterlevelAlarm</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>MinTermHeatingpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>272</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>MinBreakHeatingpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>StartThresholdHeatingpump</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>StopHystereseHeatingpump</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>StartThresholdCabinetHeating</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>368</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>PowerMovingAverageTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>SummerMode</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>SunsetTime</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>432</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>SaltProportion</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>BoilerOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>456</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="1037BC6C" Crc32="2905367733" LastChange="2018-08-05T12:45:59">fbFilterHeatingPump</Name>\n' +
    '\t\t\t<BitSize>2208</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sFilterpumpPowerOK</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sHeatingpumpPowerOK</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sContinousMode</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sFilterpumpON</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>24</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sHeatingpumpON</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sFilterMinTerm</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sHeatingpumpRestart</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sHeatingMinTerm</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sTargetValueManual</Name>\n' +
    '\t\t\t\t<Type Decoration="100C6A16">fb2Switch1Dim</Type>\n' +
    '\t\t\t\t<BitSize>432</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sFilterManual</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>912</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sPowerSwitchTrigger</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>928</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sInverterError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1072</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sFilterInverterVoltage</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TOF</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>1088</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">sFilterInverterEnable</Name>\n' +
    '\t\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>1232</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sTargetValueFilterpumpManualPC</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1376</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>sFilterManualMemory</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tPower</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>1392</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name>tMinTimeDayFilterpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1408</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iAverageMeterPower</Name>\n' +
    '\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1440</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iMinTimeDayFilterpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1472</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iMaxTimeDayFilterpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1504</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iMinTermFilterpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1536</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iMinTimeDayWFilterpump</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1568</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iStartThresholdFilterpump</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>1584</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iStopHystereseFilterpump</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>1600</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iTargetValueFilterpumpManualPC</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1616</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iTargetValueFilterpumpAutomatik</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1624</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iMinTermHeatingpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1632</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iMinBreakHeatingpump</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1664</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iStartThresholdHeatingpump</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>1696</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iStopHystereseHeatingpump</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>1712</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iAutoMode</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1728</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iAcknowledge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1736</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iSunsetTime</Name>\n' +
    '\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>1744</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iFilterpumpHand</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>1760</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iSwitchDimTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1776</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iTargetValueSteps</Name>\n' +
    '\t\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1808</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iPowerSwitchTriggerTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>1840</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">iTimestruct</Name>\n' +
    '\t\t\t\t<Type Decoration="10081BB4">TIMESTRUCT</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>1872</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iCycleTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>2000</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iInverterErrorInput</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2032</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iInverterVoltageDelay</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>2048</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iInverterEnableDelay</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>2080</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iFilterpumpOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iSaltDosageOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2120</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iSaltProportion</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iBoilerOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2136</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input">iHeatingPumpOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oTargetValueFilterpump</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2152</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oHeatingpumpOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oInverterVoltageOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2168</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oInverterEnable</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oInverterError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2184</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oFilterpumpManual</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output">oSaltdosageOn</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>2200</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>312</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>313</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="20010137">ARRAY [0..0] OF BOOL</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t<ArrayInfo>\n' +
    '\t\t\t\t<LBound>0</LBound>\n' +
    '\t\t\t\t<Elements>1</Elements>\n' +
    '\t\t\t</ArrayInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="2001016F">ARRAY [0..0] OF TIME</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t<ArrayInfo>\n' +
    '\t\t\t\t<LBound>0</LBound>\n' +
    '\t\t\t\t<Elements>1</Elements>\n' +
    '\t\t\t</ArrayInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="20010145">ARRAY [0..0] OF BYTE</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t<ArrayInfo>\n' +
    '\t\t\t\t<LBound>0</LBound>\n' +
    '\t\t\t\t<Elements>1</Elements>\n' +
    '\t\t\t</ArrayInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="2001014E">ARRAY [0..9] OF BYTE</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Firmware function id\'s]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<BitSize>80</BitSize>\n' +
    '\t\t\t<ArrayInfo>\n' +
    '\t\t\t\t<LBound>0</LBound>\n' +
    '\t\t\t\t<Elements>10</Elements>\n' +
    '\t\t\t</ArrayInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100CA7EA" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsAddRoutingInfo</Name>\n' +
    '\t\t\t<BitSize>432</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNETID</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sCHANNEL</Name>\n' +
    '\t\t\t\t<Type Decoration="40000007">STRING(6)</Type>\n' +
    '\t\t\t\t<BitSize>56</BitSize>\n' +
    '\t\t\t\t<BitOffs>256</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPARA</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pPARA</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bEXECUTE</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>368</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBUSY</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>376</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bERR</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nERRID</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>400</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>45</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>46</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100CAE0C" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsClose</Name>\n' +
    '\t\t\t<BitSize>416</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeStamp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>368</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>376</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>47</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>48</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10095D50" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsDelRoutingInfo</Name>\n' +
    '\t\t\t<BitSize>320</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNETID</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bEXECUTE</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>256</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBUSY</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>264</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bERR</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>272</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nERRID</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>49</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>50</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="2001014A">ARRAY [0..5] OF BYTE</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t<ArrayInfo>\n' +
    '\t\t\t\t<LBound>0</LBound>\n' +
    '\t\t\t\t<Elements>6</Elements>\n' +
    '\t\t\t</ArrayInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="101803B5" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsRdWrt</Name>\n' +
    '\t\t\t<BitSize>768</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">MyPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeOutAct</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeStamp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">ACT_HUSER</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TargetNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>432</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxGrp</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxOffs</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbWriteLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>512</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbReadLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>544</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pWriteBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>576</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pReadBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>608</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>640</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>656</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>688</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>696</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>704</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbRead</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[count of bytes actually read]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>736</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>51</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>52</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100F75E9" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsRdWrtInd</Name>\n' +
    '\t\t\t<BitSize>512</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iIdent</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pQueue</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">CLEAR_I</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bClear</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>88</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bValid</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>104</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nInvokeId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxGrp</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxOffs</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbReadLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbWriteLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pWriteBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>53</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>54</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100D9225" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsRdWrtRes</Name>\n' +
    '\t\t\t<BitSize>496</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">csp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">RESPOND_I</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>136</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nInvokeId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbReadLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pReadBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bRespond</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>55</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>56</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="1016FA47" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsRead</Name>\n' +
    '\t\t\t<BitSize>704</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">MyPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeOutAct</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeStamp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">ACT_HUSER</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TargetNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>432</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxGrp</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxOffs</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbReadLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>512</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pReadBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>544</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>576</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>592</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>624</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>632</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>640</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbRead</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[count of bytes actually read]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>672</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>57</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>58</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10133126" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsReadDeviceInfo</Name>\n' +
    '\t\t\t<BitSize>736</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">MyPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeOutAct</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeStamp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">ACT_HUSER</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TargetNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>432</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>464</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>496</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>504</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>512</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sDevName</Name>\n' +
    '\t\t\t\t<Type Decoration="40000014">STRING(19)</Type>\n' +
    '\t\t\t\t<BitSize>160</BitSize>\n' +
    '\t\t\t\t<BitOffs>544</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nDevVersion</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>704</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>59</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>60</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100D6CC4" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsReadInd</Name>\n' +
    '\t\t\t<BitSize>448</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pQueue</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">CLEAR_I</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bClear</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>88</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bValid</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>104</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nInvokeId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxGrp</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxOffs</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbReadLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>61</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>62</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100D9225" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsReadRes</Name>\n' +
    '\t\t\t<BitSize>496</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">csp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">RESPOND_I</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>136</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nInvokeId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbReadLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pReadBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bRespond</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>63</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>64</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="1013EF3C" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsReadState</Name>\n' +
    '\t\t\t<BitSize>576</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">MyPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeOutAct</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeStamp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">ACT_HUSER</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TargetNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>432</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>464</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>496</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>504</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>512</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nAdsState</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>544</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nDevState</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>560</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>65</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>66</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="1015F7FC" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsWrite</Name>\n' +
    '\t\t\t<BitSize>672</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">MyPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeOutAct</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeStamp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">ACT_HUSER</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TargetNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>432</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxGrp</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxOffs</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbWriteLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>512</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pWriteBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>544</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>576</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>592</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>624</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>632</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>640</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>67</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>68</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="1015F86A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsWriteControl</Name>\n' +
    '\t\t\t<BitSize>640</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">MyPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeOutAct</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TimeStamp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">ACT_HUSER</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">TargetNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>432</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nAdsState</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nDevState</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>464</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbWriteLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pWriteBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>512</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>544</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>560</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>592</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>600</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>608</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>69</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>70</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100E71CF" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsWriteInd</Name>\n' +
    '\t\t\t<BitSize>480</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pQueue</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">CLEAR_I</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bClear</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>88</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bValid</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>104</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nInvokeId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxGrp</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nIdxOffs</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbWriteLen</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pWriteBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>71</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>72</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100B89EF" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_AdsWriteRes</Name>\n' +
    '\t\t\t<BitSize>432</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">csp</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">RESPOND_I</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>136</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nInvokeId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>384</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bRespond</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>73</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>74</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10075BB0" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_CallFirmwareFb</Name>\n' +
    '\t\t\t<BitSize>320</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">sNetid_FAR</Name>\n' +
    '\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Reserved for future use]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nPort_FAR</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Reserved for future use]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">id</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Unique function id]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">instPtr</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Pointer to function block instance data]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">tTimeOut_FAR</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Reserved for future use]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>256</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBusy_FAR</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Reserved for future use]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nError</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[=0 -> no error, <> 0 -> error]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>75</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>76</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10071B62" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_FBComClose</Name>\n' +
    '\t\t\t<BitSize>96</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_bClose</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_iHandle</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>72</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>80</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>81</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100820EC" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_FBComOpen</Name>\n' +
    '\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">iState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_bOpen</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_stCOMConfig</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>88</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_iHandle</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>82</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>83</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100C26AA" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_ReadFromFile</Name>\n' +
    '\t\t\t<BitSize>224</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FileHandle</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nOffset</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nSize</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pData</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bEXECUTE</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBUSY</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>168</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bERR</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nERRID</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>91</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>92</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100C26AA" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_WriteToFile</Name>\n' +
    '\t\t\t<BitSize>224</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">LocalVar</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FileHandle</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nOffset</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nSize</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pData</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bEXECUTE</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bBUSY</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>168</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bERR</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nERRID</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>93</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>94</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10066081" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_SystemInfoType</Name>\n' +
    '\t\t\t<BitSize>336</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">runTimeNo</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">projectName</Name>\n' +
    '\t\t\t\t<Type Decoration="40000021">STRING(32)</Type>\n' +
    '\t\t\t\t<BitSize>264</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">numberOfTasks</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>272</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">onlineChangeCount</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bootDataFlags</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">systemStateFlags</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100863C1" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_SystemTaskInfoType</Name>\n' +
    '\t\t\t<BitSize>272</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">active</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">taskName</Name>\n' +
    '\t\t\t\t<Type Decoration="40000011">STRING(16)</Type>\n' +
    '\t\t\t\t<BitSize>136</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">firstCycle</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cycleTimeExceeded</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>152</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cycleTime</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">lastExecTime</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">priority</Name>\n' +
    '\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cycleCount</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="40000018" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">T_AmsNetId</Name>\n' +
    '\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">T_AmsPort</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="40000100" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">T_MaxString</Name>\n' +
    '\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="1003051C" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">R_TRIG</Name>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">M</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CLK</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Signal to detect]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Edge detected]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>251</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>252</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="1003051C" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">F_TRIG</Name>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">M</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CLK</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Signal to detect]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Edge detected]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>244</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>245</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10060D24" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">TON</Name>\n' +
    '\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">M</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal variable]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">StartTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal variable]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">IN</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[starts timer with rising edge, resets timer with falling edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">PT</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[time to pass, before Q is set]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[is TRUE, PT seconds after IN had a rising edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">ET</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[elapsed time]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>263</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>264</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10060D24" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">TOF</Name>\n' +
    '\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">M</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal variable]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">StartTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal variable]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">IN</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[starts timer with falling edge, resets timer with rising edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">PT</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[time to pass, before Q is set]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[is FALSE, PT seconds after IN had a falling edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">ET</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[elapsed time]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>261</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>262</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100102CE" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GenericOutputOnly_fpara</Name>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">pRet</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Pointer to return data]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10081BB4" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">TIMESTRUCT</Name>\n' +
    '\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">wYear</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">wMonth</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">wDayOfWeek</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">wDay</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">wHour</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">wMinute</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">wSecond</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">wMilliseconds</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="30000315" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">E_CommPort</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>COM1</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>COM2</Text>\n' +
    '\t\t\t\t<Enum>2</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="300002F0" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">E_DataBits</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>SEVEN_DATABITS</Text>\n' +
    '\t\t\t\t<Enum>0</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>EIGHT_DATABITS</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="3000036C" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">E_StoppBits</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ONE_STOPPBIT</Text>\n' +
    '\t\t\t\t<Enum>0</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>TWO_STOPPBITS</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="3000027D" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">E_Parity</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>NONE</Text>\n' +
    '\t\t\t\t<Enum>0</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>EVEN</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ODD</Text>\n' +
    '\t\t\t\t<Enum>2</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="30000303" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">E_OpenPath</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_GENERIC</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_BOOTPRJ</Text>\n' +
    '\t\t\t\t<Enum>2</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_BOOTDATA</Text>\n' +
    '\t\t\t\t<Enum>3</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_BOOTPATH</Text>\n' +
    '\t\t\t\t<Enum>4</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH1</Text>\n' +
    '\t\t\t\t<Enum>11</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH2</Text>\n' +
    '\t\t\t\t<Enum>12</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH3</Text>\n' +
    '\t\t\t\t<Enum>13</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH4</Text>\n' +
    '\t\t\t\t<Enum>14</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH5</Text>\n' +
    '\t\t\t\t<Enum>15</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH6</Text>\n' +
    '\t\t\t\t<Enum>16</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH7</Text>\n' +
    '\t\t\t\t<Enum>17</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH8</Text>\n' +
    '\t\t\t\t<Enum>18</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>PATH_USERPATH9</Text>\n' +
    '\t\t\t\t<Enum>19</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="30000394" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">E_SeekOrigin</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>SEEK_SET</Text>\n' +
    '\t\t\t\t<Enum>0</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>SEEK_CUR</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>SEEK_END</Text>\n' +
    '\t\t\t\t<Enum>2</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="300002C0" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">E_ArgType</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_UNKNOWN</Text>\n' +
    '\t\t\t\t<Enum>0</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_BYTE</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_WORD</Text>\n' +
    '\t\t\t\t<Enum>2</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_DWORD</Text>\n' +
    '\t\t\t\t<Enum>3</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_REAL</Text>\n' +
    '\t\t\t\t<Enum>4</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_LREAL</Text>\n' +
    '\t\t\t\t<Enum>5</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_SINT</Text>\n' +
    '\t\t\t\t<Enum>6</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_INT</Text>\n' +
    '\t\t\t\t<Enum>7</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_DINT</Text>\n' +
    '\t\t\t\t<Enum>8</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_USINT</Text>\n' +
    '\t\t\t\t<Enum>9</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_UINT</Text>\n' +
    '\t\t\t\t<Enum>10</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_UDINT</Text>\n' +
    '\t\t\t\t<Enum>11</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_STRING</Text>\n' +
    '\t\t\t\t<Enum>12</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>ARGTYPE_TIME</Text>\n' +
    '\t\t\t\t<Enum>13</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100930B8" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">RTC</Name>\n' +
    '\t\t\t<BitSize>256</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">OldTick</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">CurrTick</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">nMilliDiff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">nMilliRest</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">RisingEdge</Name>\n' +
    '\t\t\t\t<Type Decoration="1003051C">R_TRIG</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">EN</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">PDT</Name>\n' +
    '\t\t\t\t<Type>DT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">Q</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">CDT</Name>\n' +
    '\t\t\t\t<Type>DT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>212</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>213</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100306C8" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">RS</Name>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">SET</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">RESET1</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q1</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>255</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>256</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="300005ED" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">E_CX1000_DisplayModes</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_DisplayNoAction</Text>\n' +
    '\t\t\t\t<Enum>0</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_DisplayOn</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_DisplayOff</Text>\n' +
    '\t\t\t\t<Enum>2</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_CursorOn</Text>\n' +
    '\t\t\t\t<Enum>3</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_CursorOff</Text>\n' +
    '\t\t\t\t<Enum>4</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_CursorBlinkOn</Text>\n' +
    '\t\t\t\t<Enum>5</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_CursorBlinkOff</Text>\n' +
    '\t\t\t\t<Enum>6</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_BackLightOn</Text>\n' +
    '\t\t\t\t<Enum>7</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_BackLightOff</Text>\n' +
    '\t\t\t\t<Enum>8</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_ClearDisplay</Text>\n' +
    '\t\t\t\t<Enum>9</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_WriteLine1</Text>\n' +
    '\t\t\t\t<Enum>10</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>eCX1000_WriteLine2</Text>\n' +
    '\t\t\t\t<Enum>11</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10060AFD" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CTD</Name>\n' +
    '\t\t\t<BitSize>80</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">M</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Variable for CD Edge Detection]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CD</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Count Down on rising edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">LOAD</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Load Start Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">PV</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Start Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Counter reached 0]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CV</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Current Counter Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>237</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>238</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10060B75" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CTU</Name>\n' +
    '\t\t\t<BitSize>80</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">M</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Variable for CU Edge Detection]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CU</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Count Up]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">RESET</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Reset Counter to 0]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">PV</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Counter Limit]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Counter reached the Limit]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CV</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Current Counter Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>239</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>240</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100A13D0" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CTUD</Name>\n' +
    '\t\t\t<BitSize>96</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">MU</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Variable for CU Edge Detection]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">MD</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Variable for CD Edge Detection]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CU</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Count Up]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CD</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Count Down]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>24</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">RESET</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Reset Counter to Null]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">LOAD</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Load Start Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>40</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">PV</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Start Value / Counter Limit]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">QU</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Counter reached Limit]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">QD</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Counter reached Null]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>72</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CV</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Current Counter Value]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>241</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>242</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100409DC" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">SEMA</Name>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">X</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CLAIM</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">RELEASE</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">BUSY</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>24</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>257</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>258</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100306C6" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">SR</Name>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">SET1</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">RESET</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>8</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q1</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>259</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>260</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10050B9B" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">TP</Name>\n' +
    '\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">StartTime</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal variable]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">IN</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Trigger for Start of the Signal]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">PT</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[The length of the High-Signal in 10ms]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">Q</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[The pulse]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">ET</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[The current phase of the High-Signal]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>265</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>266</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10085B68" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_AddDnsServer</Name>\n' +
    '\t\t\t<BitSize>224</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sDNSServer</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>184</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>267</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>268</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10085D1E" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_AddMultiRoute</Name>\n' +
    '\t\t\t<BitSize>224</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sMultiCastIpAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>184</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>269</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>270</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10085D1E" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_DelMultiRoute</Name>\n' +
    '\t\t\t<BitSize>224</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sMultiCastIpAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>184</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>271</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>272</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100A634E" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_GetHostByAddr</Name>\n' +
    '\t\t\t<BitSize>272</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pHostName</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to Hostname]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">cbMaxNameLen</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>248</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>256</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>273</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>274</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10095EC2" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_GetHostByName</Name>\n' +
    '\t\t\t<BitSize>256</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pHostName</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to Hostname, must be zero terminated string!]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>104</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>275</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>276</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100DB738" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_GetNetworkConfig</Name>\n' +
    '\t\t\t<BitSize>928</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Errorflag]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Error argument]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sMacId</Name>\n' +
    '\t\t\t\t<Type Decoration="40000012">STRING(17)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[MAc Id as \'00-01-05-xx-yy-zz\']]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Ip Adresse]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sSubnetMask</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[SubNet Mask]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>368</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sDefaultGateway</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Default Gateway]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>496</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sDnsServer</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Default Gateway]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>624</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sTargetName</Name>\n' +
    '\t\t\t\t<Type Decoration="40000015">STRING(20)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Targets name]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>168</BitSize>\n' +
    '\t\t\t\t<BitOffs>752</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>277</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>278</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100A6367" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_IpAccept</Name>\n' +
    '\t\t\t<BitSize>256</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iSession</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>88</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sRemoteIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>279</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>280</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100FBB8E" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_IpClose</Name>\n' +
    '\t\t\t<BitSize>384</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">UsedLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Delay</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Remote</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iSession</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sRemoteIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bResetConnection</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>344</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>368</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>281</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>282</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100A22A4" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_IpEndSession</Name>\n' +
    '\t\t\t<BitSize>160</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">UsedLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iSession</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Errorflag]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>136</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Error argument]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>283</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>284</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100DB2A7" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_IpOpen</Name>\n' +
    '\t\t\t<BitSize>336</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">UsedLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Remote</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iSession</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sRemoteIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>296</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>285</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>286</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10151803" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_IpReceive</Name>\n' +
    '\t\t\t<BitSize>624</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">UsedLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">RxBuffer</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Remote</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">TimeOut</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bClear</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Rising edge clears fb outputs and causes the fb to receive next data]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iSession</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Session handle]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sRemoteIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Network address of the remote system]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Port number of the TCP/IP connection]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pBuffAddr</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Address of the receive data buffer]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>368</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">cbBuffLen</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Byte lenght of the receive data buffer]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>400</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bValid</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>416</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>424</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>432</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">cbReceive</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>448</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">cbBytesInStream</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>464</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sReceiveIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iReceivePortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>608</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>287</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>288</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100FBA8E" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_IpSend</Name>\n' +
    '\t\t\t<BitSize>384</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">UsedLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal GP var]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Remote</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pCurrSession</Name>\n' +
    '\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to csp]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iSession</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sRemoteIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iPortNo</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pBuffAddr</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>304</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">cbBuffLen</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>336</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>352</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>360</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>368</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>289</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>290</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="300003AF" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">E_SocketType</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>SOCK_STREAM</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>SOCK_DGRAM</Text>\n' +
    '\t\t\t\t<Enum>2</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>SOCK_RAW</Text>\n' +
    '\t\t\t\t<Enum>3</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="300004DF" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">E_SocketProtocol</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>IPPROTO_IP</Text>\n' +
    '\t\t\t\t<Enum>0</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>IPPROTO_ICMP</Text>\n' +
    '\t\t\t\t<Enum>1</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>IPPROTO_IGMP</Text>\n' +
    '\t\t\t\t<Enum>2</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>IPPROTO_TCP</Text>\n' +
    '\t\t\t\t<Enum>6</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>IPPROTO_UDP</Text>\n' +
    '\t\t\t\t<Enum>17</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t\t<EnumInfo>\n' +
    '\t\t\t\t<Text>IPPROTO_RAW</Text>\n' +
    '\t\t\t\t<Enum>255</Enum>\n' +
    '\t\t\t</EnumInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100FA5D1" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_IpStartSession</Name>\n' +
    '\t\t\t<BitSize>240</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">UsedLocal</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>64</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iDevice</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">eSocketType</Name>\n' +
    '\t\t\t\t<Type Decoration="300003AF">E_SocketType</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">eSocketProtocol</Name>\n' +
    '\t\t\t\t<Type Decoration="300004DF">E_SocketProtocol</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iPort</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iMaxConnection</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">tTimeOut</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Errorflag]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>200</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[Error argument]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iSession</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[sessionhandle]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>291</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>292</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100B271B" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_MBClose</Name>\n' +
    '\t\t\t<BitSize>208</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">InvokeId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">TransactionId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">lTimeStamp</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nHandle</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iFlags</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>112</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBUSY</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>160</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>168</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>293</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>294</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100C6CAD" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_MBConnect</Name>\n' +
    '\t\t\t<BitSize>336</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">InvokeId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">TransactionId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">lTimeStamp</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sIPAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nTCPPort</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBUSY</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>272</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>280</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nHandle</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>320</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>295</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>296</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100F373A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_MBGenericReq</Name>\n' +
    '\t\t\t<BitSize>288</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">InvokeId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">TransactionId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">lTimeStamp</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nHandle</Name>\n' +
    '\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>80</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pReqBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>96</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">cbReqLen</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pResBuff</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>144</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">cbResLen</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>176</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bExecute</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">tTimeout</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBUSY</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>248</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nErrId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>256</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">cbResponse</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>272</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>297</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>298</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10085D1E" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_SendQuery</Name>\n' +
    '\t\t\t<BitSize>224</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sMultiCastIpAddr</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>184</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>208</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>299</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>300</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="10085BAD" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_SetTargetName</Name>\n' +
    '\t\t\t<BitSize>256</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">Ident</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[status of last edge]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">State</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[internal state]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sTargetName</Name>\n' +
    '\t\t\t\t<Type Decoration="40000015">STRING(20)</Type>\n' +
    '\t\t\t\t<BitSize>168</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[FB busy]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>232</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>301</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>302</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100FB889" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_Smtp</Name>\n' +
    '\t\t\t<BitSize>3520</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nIdent</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sSmtpServer</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sFrom</Name>\n' +
    '\t\t\t\t<Type Decoration="40000051">STRING(80)</Type>\n' +
    '\t\t\t\t<BitSize>648</BitSize>\n' +
    '\t\t\t\t<BitOffs>184</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sTo</Name>\n' +
    '\t\t\t\t<Type Decoration="40000051">STRING(80)</Type>\n' +
    '\t\t\t\t<BitSize>648</BitSize>\n' +
    '\t\t\t\t<BitOffs>832</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sCc</Name>\n' +
    '\t\t\t\t<Type Decoration="40000051">STRING(80)</Type>\n' +
    '\t\t\t\t<BitSize>648</BitSize>\n' +
    '\t\t\t\t<BitOffs>1480</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sBcc</Name>\n' +
    '\t\t\t\t<Type Decoration="40000051">STRING(80)</Type>\n' +
    '\t\t\t\t<BitSize>648</BitSize>\n' +
    '\t\t\t\t<BitOffs>2128</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sSubject</Name>\n' +
    '\t\t\t\t<Type Decoration="40000051">STRING(80)</Type>\n' +
    '\t\t\t\t<BitSize>648</BitSize>\n' +
    '\t\t\t\t<BitOffs>2776</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">pMail</Name>\n' +
    '\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t<![CDATA[pointer to Mail, must be a zero terminated String]]>\n' +
    '\t\t\t\t</Comment>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>3424</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">tTimeOut</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>3456</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>3488</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>3496</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>3504</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>303</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>304</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t\t<DataType>\n' +
    '\t\t\t<Name Decoration="100BA9C7" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">FB_Sntp</Name>\n' +
    '\t\t\t<BitSize>416</BitSize>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nIdent</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>0</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bLastEdge</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>16</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">nState</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>32</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bStart</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>48</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sSntpServer</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>56</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">tTimeOut</Name>\n' +
    '\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>192</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bBusy</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>224</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">bError</Name>\n' +
    '\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t<BitOffs>232</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">iErrorId</Name>\n' +
    '\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t<BitOffs>240</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">tTime</Name>\n' +
    '\t\t\t\t<Type>DT</Type>\n' +
    '\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t<BitOffs>256</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<SubItem>\n' +
    '\t\t\t\t<Name FbParameter="Output" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBX9000.lbx">sCurrSntpServer</Name>\n' +
    '\t\t\t\t<Type Decoration="40000010">STRING(15)</Type>\n' +
    '\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t<BitOffs>288</BitOffs>\n' +
    '\t\t\t</SubItem>\n' +
    '\t\t\t<FbInfo>\n' +
    '\t\t\t\t<CodeIndex>305</CodeIndex>\n' +
    '\t\t\t\t<InitIndex>306</InitIndex>\n' +
    '\t\t\t</FbInfo>\n' +
    '\t\t</DataType>\n' +
    '\t</DataTypes>\n' +
    '\t<Functions>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1004D3B5" IsDefinedInLibrary="1" Library="">PRINTF</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>324</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="">PRINTF</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000101">STRING(256)</Type>\n' +
    '\t\t\t\t\t<BitSize>2056</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="">stFormat</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000051">STRING(80)</Type>\n' +
    '\t\t\t\t\t<BitSize>648</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="">dwValue</Name>\n' +
    '\t\t\t\t\t<Type Pointer="1">BYTE</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="">nType</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1002079D" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">F_GENERIC</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>42</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">F_GENERIC</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">bDummy</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="100105F7" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">F_ReadDebugTimer</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>43</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">F_ReadDebugTimer</Name>\n' +
    '\t\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10010669" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">F_StartDebugTimer</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>44</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">F_StartDebugTimer</Name>\n' +
    '\t\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10030C39" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_CallFirmwareFun</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>77</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_CallFirmwareFun</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">id</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Function id]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">paraPtr</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Pointer to struct with function parameters (includes pointer to return data too)]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040ECB" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_CommRead</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>78</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_CommRead</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">hCom</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Communication port handle]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbRxBuffer</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Byte lenght of the receive data buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pRxBuffer</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Address of the receive data buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040F3A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_CommWrite</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>79</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_CommWrite</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">hCom</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Communication port handle]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbTxBuffer</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pTxBuffer</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10020929" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_GetNoOfBytesInRxQ</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>84</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_GetNoOfBytesInRxQ</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">hCom</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Communication port handle]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1002092B" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_GetNoOfBytesInTxQ</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>85</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_GetNoOfBytesInTxQ</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">hCom</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Communication port handle]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10020D0A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_GetVersionTcBaseBX</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>86</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_GetVersionTcBaseBX</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nVersionElement</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040CCD" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_MemCmp</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>87</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_MemCmp</Name>\n' +
    '\t\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pBuf1</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[First buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pBuf2</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Second buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbLen</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Number of characters]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040D3F" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_MemCpy</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>88</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_MemCpy</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pDest</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[New buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pSrc</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Buffer to copy from]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbLen</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Number of characters to copy]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040D8A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_MemMove</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>89</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_MemMove</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pDest</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[New buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pSrc</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Buffer to copy from]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbLen</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Number of characters to copy]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040EBD" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_MemSet</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>90</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">FW_MemSet</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">pDest</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Pointer to destination]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">nFillByte</Name>\n' +
    '\t\t\t\t\t<Type>USINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Character to set]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcBaseBCxx50.lbx">cbLen</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Number of characters]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1006870A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">AdsRemoteLogDINT</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>123</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">AdsRemoteLogDINT</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="1005D759">AdsRemoteLogDINT_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>2336</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Network address of remote TwinCAT system]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">msgCtrlMask</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">msgFmtStr</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">iArg</Name>\n' +
    '\t\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="100686D8" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">AdsRemoteLogREAL</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>124</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">AdsRemoteLogREAL</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="1005D744">AdsRemoteLogREAL_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>2336</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Network address of remote TwinCAT system]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">msgCtrlMask</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">msgFmtStr</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fArg</Name>\n' +
    '\t\t\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10060BD6" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">AdsRemoteLogSTR</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>125</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">AdsRemoteLogSTR</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="100519ED">AdsRemoteLogSTR_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>4352</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">sNetId</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Network address of remote TwinCAT system]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">msgCtrlMask</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">msgFmtStr</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">sArg</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1003D423" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">AppendErrorString</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>136</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">AppendErrorString</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">strOld</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">strNew</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040E2B" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">CLEARBIT32</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>137</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">CLEARBIT32</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">dwConst</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">inVal32</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bitNo</Name>\n' +
    '\t\t\t\t\t<Type>SINT</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="100510E8" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">CSETBIT32</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>138</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">CSETBIT32</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">dwConst</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">inVal32</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bitNo</Name>\n' +
    '\t\t\t\t\t<Type>SINT</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bitVal</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[value to which the bit should be set]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1003245B" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">Default_Settings</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>141</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">Default_Settings</Name>\n' +
    '\t\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="100102CE">GenericOutputOnly_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bDummy</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="100236C9" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">DeviceTyp</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>142</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">DeviceTyp</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10045227">strDeviceTyp</Type>\n' +
    '\t\t\t\t\t<BitSize>224</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">Data</Name>\n' +
    '\t\t\t\t\t<Type Decoration="1019B820">ST_RTSc166Metrics</Type>\n' +
    '\t\t\t\t\t<BitSize>1056</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1007D53A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">DT_TO_SYSTEMTIME</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>145</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">DT_TO_SYSTEMTIME</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10081BB4">TIMESTRUCT</Type>\n' +
    '\t\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">sDT</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000019">STRING(24)</Type>\n' +
    '\t\t\t\t\t<BitSize>200</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">nDay</Name>\n' +
    '\t\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">b</Name>\n' +
    '\t\t\t\t\t<Type Decoration="2001015C">ARRAY [0..23] OF BYTE</Type>\n' +
    '\t\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">TS</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10081BB4">TIMESTRUCT</Type>\n' +
    '\t\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">Index7001</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">DTIN</Name>\n' +
    '\t\t\t\t\t<Type>DT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040F70" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_COMPortRead</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>146</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_COMPortRead</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">hCom</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">cbRxBuffer</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Byte lenght of the receive data buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">pRxBuffer</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Address of the receive data buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040FDF" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_COMPortWrite</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>147</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_COMPortWrite</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">hCom</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">cbTxBuffer</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">pTxBuffer</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1003711A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_CreateAmsNetId</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>148</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_CreateAmsNetId</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000018">STRING(23)</Type>\n' +
    '\t\t\t\t\t<BitSize>192</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">idx</Name>\n' +
    '\t\t\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">nIds</Name>\n' +
    '\t\t\t\t\t<Type Decoration="2001014A">ARRAY [0..5] OF BYTE</Type>\n' +
    '\t\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10020E7D" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_GetVersionTcSystemBCxx50</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>149</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_GetVersionTcSystemBCxx50</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">nVersionElement</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10049A70" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_SwapReal</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>150</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">F_SwapReal</Name>\n' +
    '\t\t\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">pReal</Name>\n' +
    '\t\t\t\t\t<Type Decoration="2001014F" Pointer="1">ARRAY [0..1] OF WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">pResult</Name>\n' +
    '\t\t\t\t\t<Type Decoration="2001014F" Pointer="1">ARRAY [0..1] OF WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fVal</Name>\n' +
    '\t\t\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1001061A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">FirmwareVersion</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>187</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">FirmwareVersion</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040D48" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GETBIT32</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>188</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GETBIT32</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">dwConst</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">inVal32</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bitNo</Name>\n' +
    '\t\t\t\t\t<Type>SINT</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1003237A" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetFBusStatus</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>189</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetFBusStatus</Name>\n' +
    '\t\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="100102CE">GenericOutputOnly_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bDummy</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1003F037" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetRTSc166Metrics</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>190</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetRTSc166Metrics</Name>\n' +
    '\t\t\t\t\t<Type Decoration="1019B820">ST_RTSc166Metrics</Type>\n' +
    '\t\t\t\t\t<BitSize>1056</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="100102CE">GenericOutputOnly_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bDummy</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10032291" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetSysInfo</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>191</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetSysInfo</Name>\n' +
    '\t\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="100102CE">GenericOutputOnly_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bDummy</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="100322D5" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetSysTick</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>192</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetSysTick</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="100102CE">GenericOutputOnly_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bDummy</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10032388" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetTBusStatus</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>193</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">GetTBusStatus</Name>\n' +
    '\t\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="100102CE">GenericOutputOnly_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bDummy</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1004E4D6" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">IsFinite</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>194</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">IsFinite</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">ptrDouble</Name>\n' +
    '\t\t\t\t\t<Type Decoration="20010194" Pointer="1">ARRAY [0..1] OF DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">ptrSingle</Name>\n' +
    '\t\t\t\t\t<Type Pointer="1">DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">x</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10033D04">T_Arg</Type>\n' +
    '\t\t\t\t\t<BitSize>80</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040ABF" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">MEMCMP</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>195</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">MEMCMP</Name>\n' +
    '\t\t\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">pBuf1</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[First buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">pBuf2</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Second buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">n</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Number of characters]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040CC9" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">MEMCPY</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>196</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">MEMCPY</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">destAddr</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[New buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">srcAddr</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Buffer to copy from]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">n</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Number of characters to copy]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040D14" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">MEMMOVE</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>197</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">MEMMOVE</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">destAddr</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[New buffer]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">srcAddr</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Buffer to copy from]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">n</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Number of characters to copy]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040D28" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">MEMSET</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>200</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">MEMSET</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">destAddr</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Pointer to destination]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fillByte</Name>\n' +
    '\t\t\t\t\t<Type>USINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Character to set]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">n</Name>\n' +
    '\t\t\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[Number of characters]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10033284" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">OTSTRUCT_TO_TIME</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>201</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">OTSTRUCT_TO_TIME</Name>\n' +
    '\t\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">tmpMilli</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">OTIN</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10061439">OTSTRUCT</Type>\n' +
    '\t\t\t\t\t<BitSize>96</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1003692F" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">PresetSysTick</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>204</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">PresetSysTick</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10024917">PresetSysTick_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>64</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">iValue</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10032151" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">Reboot</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>211</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">Reboot</Name>\n' +
    '\t\t\t\t\t<Type>WORD</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="100102CE">GenericOutputOnly_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bDummy</Name>\n' +
    '\t\t\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10040DB0" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">SETBIT32</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>216</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">SETBIT32</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">dwConst</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">inVal32</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">bitNo</Name>\n' +
    '\t\t\t\t\t<Type>SINT</Type>\n' +
    '\t\t\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1006A848" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">SYSTEMTIME_TO_DT</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>219</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">SYSTEMTIME_TO_DT</Name>\n' +
    '\t\t\t\t\t<Type>DT</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">b</Name>\n' +
    '\t\t\t\t\t<Type Decoration="2001015B">ARRAY [0..22] OF BYTE</Type>\n' +
    '\t\t\t\t\t<BitSize>184</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">str</Name>\n' +
    '\t\t\t\t\t<Type Decoration="4000001F">STRING(30)</Type>\n' +
    '\t\t\t\t\t<BitSize>248</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">nSeconds</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">Index7001</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">TIMESTR</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10081BB4">TIMESTRUCT</Type>\n' +
    '\t\t\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10033235" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">TIME_TO_OTSTRUCT</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>220</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">TIME_TO_OTSTRUCT</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10061439">OTSTRUCT</Type>\n' +
    '\t\t\t\t\t<BitSize>96</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">tmpMilli</Name>\n' +
    '\t\t\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">TIN</Name>\n' +
    '\t\t\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10036B4E" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">TrigTBusCycle</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>221</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">TrigTBusCycle</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">fpara</Name>\n' +
    '\t\t\t\t\t<Type Decoration="10024A46">TrigTBusCycle_fpara</Type>\n' +
    '\t\t\t\t\t<BitSize>48</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\TcSystemBCxx50.lbx">iProcessImage</Name>\n' +
    '\t\t\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t\t\t<Comment>\n' +
    '\t\t\t\t\t\t<![CDATA[0-3]]>\n' +
    '\t\t\t\t\t</Comment>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1003CF58" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CONCAT</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>236</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">CONCAT</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR1</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR2</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10048DE1" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">DELETE</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>243</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">DELETE</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">LEN</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">POS</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10038BEA" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">FIND</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>246</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">FIND</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR1</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR2</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1004D151" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">INSERT</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>247</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">INSERT</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR1</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR2</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">POS</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10038BD5" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">LEFT</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>248</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">LEFT</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">SIZE</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10024688" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">LEN</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>249</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">LEN</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10048D08" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">MID</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>250</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">MID</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">LEN</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">POS</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="1005D217" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">REPLACE</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>253</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">REPLACE</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR1</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR2</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">L</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">P</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t\t<Function>\n' +
    '\t\t\t<Name Decoration="10038C28" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">RIGHT</Name>\n' +
    '\t\t\t<FunInfo>\n' +
    '\t\t\t\t<CodeIndex>254</CodeIndex>\n' +
    '\t\t\t\t<ReturnValue>\n' +
    '\t\t\t\t\t<Name IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">RIGHT</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</ReturnValue>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">STR</Name>\n' +
    '\t\t\t\t\t<Type Decoration="40000100">STRING(255)</Type>\n' +
    '\t\t\t\t\t<BitSize>2048</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t\t<FunParameter>\n' +
    '\t\t\t\t\t<Name FunParameter="Input" IsDefinedInLibrary="1" Library="C:\\Users\\norbert.kleber\\Desktop\\Poolsteuerung\\Beckhoff\\lib\\STANDARD.LBX">SIZE</Name>\n' +
    '\t\t\t\t\t<Type>INT</Type>\n' +
    '\t\t\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t\t\t</FunParameter>\n' +
    '\t\t\t</FunInfo>\n' +
    '\t\t</Function>\n' +
    '\t</Functions>\n' +
    '\t<Programs>\n' +
    '\t\t<Program>\n' +
    '\t\t\t<Name Decoration="1011B235" Crc32="3003924851" LastChange="2019-02-19T21:57:04">prgMain</Name>\n' +
    '\t\t\t<PrgInfo>\n' +
    '\t\t\t\t<CodeIndex>322</CodeIndex>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sMeterCommunication</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sRealtimeClock</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sDateTimeStruct</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sAveragePower</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sAveragePowerBoiler</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sPump</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sPool</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sBoiler</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sMeter</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sValveHydroFlowOn</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sValveMassageOn</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sSumpPumpOn</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sWaterleverToHigh</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sNewTime</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sNewValue</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.sReboot</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t\t<Symbol>\n' +
    '\t\t\t\t\t<Name>prgMain.tPower</Name>\n' +
    '\t\t\t\t</Symbol>\n' +
    '\t\t\t</PrgInfo>\n' +
    '\t\t</Program>\n' +
    '\t</Programs>\n' +
    '\t<Symbols>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sMeterCommunication</Name>\n' +
    '\t\t\t<Type Decoration="101B94C0">fbMeterModCommunication</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Reading Time and Powervalue vom Fronius Meter]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>4152</IOffset>\n' +
    '\t\t\t<BitSize>6320</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sRealtimeClock</Name>\n' +
    '\t\t\t<Type Decoration="100930B8">RTC</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Systemclock]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>4942</IOffset>\n' +
    '\t\t\t<BitSize>256</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sDateTimeStruct</Name>\n' +
    '\t\t\t<Type Decoration="10081BB4">TIMESTRUCT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Systemtimestruct]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>4974</IOffset>\n' +
    '\t\t\t<BitSize>128</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sAveragePower</Name>\n' +
    '\t\t\t<Type Decoration="100D5422">fbMovingAverage</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Moving Average Power Block]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>4990</IOffset>\n' +
    '\t\t\t<BitSize>15552</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sAveragePowerBoiler</Name>\n' +
    '\t\t\t<Type Decoration="100D5422">fbMovingAverage</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Moving Average Power Block for Boiler]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>6934</IOffset>\n' +
    '\t\t\t<BitSize>15552</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sPump</Name>\n' +
    '\t\t\t<Type Decoration="1037BC6C">fbFilterHeatingPump</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Filter and Heatingpump with Energymanagement]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9942</IOffset>\n' +
    '\t\t\t<BitSize>2208</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sPool</Name>\n' +
    '\t\t\t<Type Decoration="10165255">fbPool</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Poolpump with Valves for Massage and HydroFlow]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9154</IOffset>\n' +
    '\t\t\t<BitSize>1168</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sBoiler</Name>\n' +
    '\t\t\t<Type Decoration="100B54D0">fbBoiler</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Boiler Management]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9300</IOffset>\n' +
    '\t\t\t<BitSize>288</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sMeter</Name>\n' +
    '\t\t\t<Type Decoration="10095ACD">fbMeterPowerCompany</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Meter Power Company Read]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9336</IOffset>\n' +
    '\t\t\t<BitSize>336</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sValveHydroFlowOn</Name>\n' +
    '\t\t\t<Type Decoration="10060D24">TOF</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9378</IOffset>\n' +
    '\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sValveMassageOn</Name>\n' +
    '\t\t\t<Type Decoration="10060D24">TOF</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9396</IOffset>\n' +
    '\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sSumpPumpOn</Name>\n' +
    '\t\t\t<Type Decoration="10060D24">TOF</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9414</IOffset>\n' +
    '\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sWaterleverToHigh</Name>\n' +
    '\t\t\t<Type Decoration="10060D24">TON</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9432</IOffset>\n' +
    '\t\t\t<BitSize>144</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sNewTime</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>4037</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sNewValue</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9450</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.sReboot</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9451</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">prgMain.tPower</Name>\n' +
    '\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9452</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_LOGGER</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>120</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_EVENTLOG</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>122</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_RTIME</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[R0 Real time]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>124</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_IO</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[I/O Driver]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>126</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_NC</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>128</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_NCSAF</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>130</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_NCSVB</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>132</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_ISG</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>134</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_CNC</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>136</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_LINE</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>138</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_PLC</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>140</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_PLC_RTS1</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>142</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_PLC_RTS2</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>144</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_PLC_RTS3</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>146</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_PLC_RTS4</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>148</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_CAM</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>150</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R0_CAMTOOL</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>152</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AMSPORT_R3_SYSSERV</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[System Service]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>154</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_INVALID</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>156</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_IDLE</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>158</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_RESET</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>160</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_INIT</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>162</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_START</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>164</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_RUN</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>166</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_STOP</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>168</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_SAVECFG</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>170</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_LOADCFG</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>172</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_POWERFAILURE</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>174</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_POWERGOOD</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>176</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_ERROR</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>178</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_SHUTDOWN</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>180</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_SUSPEND</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>182</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_RESUME</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>184</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.ADSSTATE_MAXSTATES</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[ADS reserved index groups]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>186</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_OPENCREATE</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>188</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_OPENREAD</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>192</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_OPENWRITE</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>196</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_CREATEFILE</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>200</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_CLOSEHANDLE</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>204</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FOPEN</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>208</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FCLOSE</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>212</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FREAD</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>216</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FWRITE</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>220</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FSEEK</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>224</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FTELL</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>228</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FGETS</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>232</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FPUTS</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>236</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FSCANF</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>240</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FPRINTF</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>244</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FEOF</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>248</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FDELETE</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>252</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_FRENAME</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>256</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_REG_HKEYLOCALMACHINE</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>260</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_SENDEMAIL</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>264</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_TIMESERVICES</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>268</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_STARTPROCESS</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>272</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSERVICE_CHANGENETID</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[System service index offsets: SYSTEMSERVICE_TIMESERVICES]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>276</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.TIMESERVICE_DATEANDTIME</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>280</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.TIMESERVICE_SYSTEMTIMES</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>284</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.TIMESERVICE_RTCTIMEDIFF</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>288</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.TIMESERVICE_ADJUSTTIMETORTC</Name>\n' +
    '\t\t\t<Type>UDINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[ADSLOGxxx log control mask types]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>292</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.BOOTDATAFLAGS_RETAIN_LOADED</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>296</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.BOOTDATAFLAGS_RETAIN_INVALID</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>297</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.BOOTDATAFLAGS_RETAIN_REQUESTED</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>298</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.BOOTDATAFLAGS_PERSISTENT_LOADED</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>299</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.BOOTDATAFLAGS_PERSISTENT_INVALID</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[system state constants (-> SYSTEMINFOTYPE.systemStateFlags)]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>300</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSTATEFLAGS_BSOD</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[blue screen of death]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>301</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.SYSTEMSTATEFLAGS_RTVIOLATION</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[realtime violation - latency time]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>302</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.FOPEN_MODEREAD</Name>\n' +
    '\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA["r": Opens for reading. If the file does not exist or cannot be found, the call fails.]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>304</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.FOPEN_MODEWRITE</Name>\n' +
    '\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA["w": Opens an empty file for writing. If the given file exists, its contents are destroyed.]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>308</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.FOPEN_MODEAPPEND</Name>\n' +
    '\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA["a": Opens for writing at the end of the file (appending) without removing the EOF marker before writing new data to the file; creates the file first if it doesn’t exist.]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>312</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.FOPEN_MODEPLUS</Name>\n' +
    '\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA["+": Opens for reading and writing]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>316</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.FOPEN_MODEBINARY</Name>\n' +
    '\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA["b": Open in binary (untranslated) mode.]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>320</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.FOPEN_MODETEXT</Name>\n' +
    '\t\t\t<Type>DWORD</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA["t": Open in text (translated) mode.]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>324</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.PI</Name>\n' +
    '\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[ASCII to decimal and decimal digits to ASCII codes]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>328</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.GetRTSc166Metrics_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: GenericOutputOnly_fpara;\t\tparaPtr.pRet == POINTER TO ST_RTSc166Metrics]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>332</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.GetFBusStatus_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: GenericOutputOnly_fpara;\t\tparaPtr.pRet == POINTER TO WORD]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>334</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.GetTBusStatus_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: GenericOutputOnly_fpara;\t\tparaPtr.pRet == POINTER TO WORD]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>336</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1" TaskPrio="1">.GetSysTick_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: GenericOutputOnly_fpara;\t\tparaPtr.pRet == POINTER TO DWORD]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>338</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.PresetSysTick_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: PresetSysTick_fpara;\t\t\tparaPtr.pRet == POINTER TO DWORD]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>340</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.TrigTBusCycle_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: TrigTBusCycle_fpara;\t\t\tparaPtr.pRet == POINTER TO INT]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>342</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.Reboot_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: GenericOutputOnly_fpara;\t\tparaPtr.pRet == POINTER TO WORD]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>344</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AdsRemoteLogDINT_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: AdsRemoteLogDINT_fpara;\tparaPtr.pRet == POINTER TO INT]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>346</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AdsRemoteLogSTR_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: AdsRemoteLogSTR_fpara;\t\tparaPtr.pRet == POINTER TO INT]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>348</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.AdsRemoteLogREAL_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: AdsRemoteLogREAL_fpara;\tparaPtr.pRet == POINTER TO INT]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>350</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.GetSysInfo_id</Name>\n' +
    '\t\t\t<Type>UINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[paraPtr: GenericOutputOnly_fpara;\t\tparaPtr.pRet == POINTER TO WORD]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>352</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iCabinetTemp</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Schaltschranktemperatur in 1/10°C]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61472</IGroup>\n' +
    '\t\t\t<IOffset>0</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iRoomTemp</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Raumtemperatur in 1/10°C]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61472</IGroup>\n' +
    '\t\t\t<IOffset>2</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iFilterpumpHand</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Drucktaster Filterpumpe Handbetrieb Ein/Aus]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>800</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iSaltDosageOn</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Knebelschalter Salzanlage (Ausgeschaltet \'0\')]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>801</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iSaltDosageReduced</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Knebelschalter Salzanlage (Reduziert \'1\')]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>802</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iAirPressureSwitch</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Drucklufttaster Pool]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>803</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iAcknowledgement</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Quittiertaster Summenstörung]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>804</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iPulseMeterPowerCompany</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Impulseingang des EVU Stromzählers]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>805</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iTripPoolpump</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Tripfehler Frequenzumrichter Poolpumpe (OK \'1\')]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>808</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iTripFilterpump</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Tripfehler Frequenzumrichter Filterpumpe (OK \'1\')]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>809</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iWaterlevelHigh</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Schwimmerschalter Technikschacht (Wasserstand hoch \'1\')]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>810</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iPCblock</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[EVU Sperre]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>811</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iHeatingPumpOperationHeating</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Wärmepumpe Betrieb Heizen]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>816</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iHeatingPumpOperationBoiler</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Wärmepumpe Betrieb Boiler]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>817</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Input" TaskPrio="1">.iHeatingPumpError</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Wärmepumpe Störung]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61473</IGroup>\n' +
    '\t\t\t<IOffset>819</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qTargetValuePoolpump</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Sollwertvorgabe für Poolpumpe]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61488</IGroup>\n' +
    '\t\t\t<IOffset>0</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qTargetValueFilterpump</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Sollwertvorgabe für Filterpumpe]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61488</IGroup>\n' +
    '\t\t\t<IOffset>2</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qInverterPoolpumpVoltageOn</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Netzschütz Poolpumpe ein]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>800</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qInverterEnablePoolpumpCCW</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Reglerfreigabe Poolpumpe CCW]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>801</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qInverterFilterpumpVoltageOn</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Netzschütz Filterpump ein]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>802</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qInverterEnableFilterpumpCCW</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Reglerfreigabe Filterpumpe CCW]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>803</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qErrorLamp</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Leuchtdrucktaster Summenstörung]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>808</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qFilterpumpHandLamp</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Leuchtdrucktaster Filterpumpe Handbetrieb]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>809</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qCabinetHeatingOn</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Schaltschankheizung einschalten]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>816</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qAdditionalSumpPump</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Zusätzliche Sumpfpumpe einschalten]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>817</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qHydroFlowValveON</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Ventil Gegenstromanlage ein]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>824</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qHydroFlowValveCCW</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Ventil Gegenstromanlage Richtungsumschaltung]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>825</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qMassageValveOn</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Ventil Massagedüsen ein]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>832</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qMassageValveCCW</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Ventil Massagedüsen Richtungsumschaltung]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>833</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qSaltDosageEnable</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Freigabe Salzanlage]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>840</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qSaltDosageReduced</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Salzanlage reduzierter Betrieb]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>841</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qHeatingPumpSGRK1</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Wärmepumpe SGR Kontakt 1]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>848</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qHeatingPumpSGRK2</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Wärmepumpe SGR Kontakt 2]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>849</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qBoilerOutput1</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Boiler 1. Schütz]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>856</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qBoilerOutput2</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Boiler 2. Schütz]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>857</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qBoilerOutput3</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Boiler 3. Schütz]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>858</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="Output" TaskPrio="1">.qBoilerOutput4</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Boiler 4. Schütz]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>61489</IGroup>\n' +
    '\t\t\t<IOffset>859</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">.kldi</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[IBN Allgemein]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9506</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name TaskPrio="1">.kldi1</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[IBN Fehler Überbrücken]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9507</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name>.test</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9508</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Persistent="1" TaskPrio="1">.sTargetValue</Name>\n' +
    '\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t<IGroup>16432</IGroup>\n' +
    '\t\t\t<IOffset>0</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Persistent="1" TaskPrio="1">.sFilterpumpCompleteRuntimeOfDay</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16432</IGroup>\n' +
    '\t\t\t<IOffset>4</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Persistent="1" TaskPrio="1">.sPulseCounter</Name>\n' +
    '\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t<IGroup>16432</IGroup>\n' +
    '\t\t\t<IOffset>8</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Persistent="1" TaskPrio="1">.sTargetValueHydroFlow</Name>\n' +
    '\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t<IGroup>16432</IGroup>\n' +
    '\t\t\t<IOffset>12</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Persistent="1" TaskPrio="1">.sTargetValueMassage</Name>\n' +
    '\t\t\t<Type>REAL</Type>\n' +
    '\t\t\t<IGroup>16432</IGroup>\n' +
    '\t\t\t<IOffset>16</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Persistent="1" TaskPrio="1">.sParametersMemory</Name>\n' +
    '\t\t\t<Type Decoration="1016A0A7">Parameter</Type>\n' +
    '\t\t\t<IGroup>16432</IGroup>\n' +
    '\t\t\t<IOffset>20</IOffset>\n' +
    '\t\t\t<BitSize>464</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.TripFilterpump</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>0</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.TripPoolpump</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>1</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.WaterlevelToHigh</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>2</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.MeterCommunicationTimeout</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>3</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.FilterpumpAktiv</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>8</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.PoolpumpAktiv</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>9</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.HeatpumpAktiv</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>10</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.CabinetHeatingAktiv</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>11</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.HeatpumpPowerup</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>12</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.SaltAktive</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>13</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.BoilerOutput1</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>16</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.BoilerOutput2</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>17</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.BoilerOutput3</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>18</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.BoilerOutput4</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>19</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.HeatingPumpOperationHeating</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>24</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.HeatingPumpOperationBoiler</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>25</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.HeatingPumpError</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[\n' +
    'Measured Values]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>27</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.CurrentPowerConsumption</Name>\n' +
    '\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>6</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.CabinetTemp</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>10</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.RoomTemp</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>12</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.AverageMeterPower</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>14</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.CompletePowerConsumption</Name>\n' +
    '\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[\n' +
    'Parameters]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>16</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.MinTimeDayFilterpump</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>20</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.MaxTimeDayFilterpump</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>24</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.MinTermFilterpump</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>28</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.MinTimeDayWFilterpump</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>32</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.StartThresholdFilterpump</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>34</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.StopHystereseFilterpump</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>38</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.TargetValueFilterpumpAutomatik</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>40</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.TargetValueFilterpumpManual</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[%MB41]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>42</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.OffPointBoiler</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[%MW42]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>44</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.PowerMovingAverageTimeBoiler</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[%MD44]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>46</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.TimeDelaySumppumpStop</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>50</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.TimeDelayWaterlevelAlarm</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>54</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.MinTermHeatingpump</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>60</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.MinBreakHeatingpump</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>64</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.StartThresholdHeatingpump</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>68</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.StopHystereseHeatingpump</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>70</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.StartThresholdCabinetHeating</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>74</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.PowerMovingAverageTime</Name>\n' +
    '\t\t\t<Type>TIME</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>80</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.SummerMode</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>672</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.Acknowledge</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>673</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.BoilerOn</Name>\n' +
    '\t\t\t<Type>BOOL</Type>\n' +
    '\t\t\t<IGroup>16417</IGroup>\n' +
    '\t\t\t<IOffset>674</IOffset>\n' +
    '\t\t\t<BitSize>1</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.SunsetTime</Name>\n' +
    '\t\t\t<Type>INT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>86</IOffset>\n' +
    '\t\t\t<BitSize>16</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.SaltProportion</Name>\n' +
    '\t\t\t<Type>BYTE</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>88</IOffset>\n' +
    '\t\t\t<BitSize>8</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Static="MArea" TaskPrio="1">.NewCompletePowerConsumption</Name>\n' +
    '\t\t\t<Type>DINT</Type>\n' +
    '\t\t\t<IGroup>16416</IGroup>\n' +
    '\t\t\t<IOffset>90</IOffset>\n' +
    '\t\t\t<BitSize>32</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name IsDefinedInLibrary="1">.SYSTEMINFO</Name>\n' +
    '\t\t\t<Type Decoration="10066081">FW_SystemInfoType</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9510</IOffset>\n' +
    '\t\t\t<BitSize>336</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name IsDefinedInLibrary="1">.SYSTEMTASKINFO</Name>\n' +
    '\t\t\t<Type Decoration="100863C1">FW_SystemTaskInfoType</Type>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9552</IOffset>\n' +
    '\t\t\t<BitSize>272</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t\t<Symbol>\n' +
    '\t\t\t<Name Constant="1" IsDefinedInLibrary="1">.FORMAT_DECASC_CODES</Name>\n' +
    '\t\t\t<Type Decoration="2001014E">ARRAY [0..9] OF BYTE</Type>\n' +
    '\t\t\t<Comment>\n' +
    '\t\t\t\t<![CDATA[Firmware function id\'s]]>\n' +
    '\t\t\t</Comment>\n' +
    '\t\t\t<IGroup>16448</IGroup>\n' +
    '\t\t\t<IOffset>9586</IOffset>\n' +
    '\t\t\t<BitSize>80</BitSize>\n' +
    '\t\t</Symbol>\n' +
    '\t</Symbols>\n' +
    '\t<VarConfigs/>\n' +
    '</PlcProjectInfo>';


xml2js.parseString(data, (err, jsonTpyData) => {
    if (err) {
        adapter.log.error(`Parsing of XML Data of *.tpy occured an Error: ${err}`);

        return;
    }

    console.log(JSON.stringify(jsonTpyData));
});
