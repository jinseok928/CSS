            var mySelection;
            function seeOptions() {
                var amount=document.getElementById("monetaryInput").value;
                var opOne = amount/47.0654;
                opOne= opOne.toFixed(2);
                var opTwo = amount/31.9118;
                opTwo= opTwo.toFixed(2);
                var opThree = amount/47.0654;
                opThree= opThree.toFixed(2);
                if(amount>=1000){
                    document.querySelector('.options').innerHTML=`
        <div id="option"> 
            <div class="optionTitle" id="optionOne">
                <div style="float:left;">
                    <p id="titleOneOne" class="sprk-b-TypeBodyFour" style="padding-bottom:8px;">Zero interest for 6 months!</p>
                    <p id="titleOneTwo" class="sprk-b-TypeBodyTwo" style="display:inline;">
                        <b id="demoOne" style="display:inline !important; font-size: 1.625rem; font-weight: 500;">
                    ${opOne}
                        </b> / month
                    </p>
                </div>

                <div class="select">
                    <img id="selectorOne" src="../images/UnselectedCircle.svg" value='select' onclick="
                        document.querySelector('#optionOne').style.backgroundColor='#13A48E'; 
                        document.querySelector('#titleOneOne').style.color='white';
                        document.querySelector('#titleOneTwo').style.color='white';
                        document.querySelector('#borderColorOne').style.borderColor='#FFFFFF';
                        document.getElementById('selectorOne').src='../images/SelectedCircle.svg';
                        document.querySelector('#optionTwo').style.backgroundColor='white'; 
                        document.querySelector('#titleTwoOne').style.color='#333333';
                        document.querySelector('#titleTwoTwo').style.color='#333333';
                        document.getElementById('selectorTwo').src='../images/UnselectedCircle.svg';
                        document.querySelector('#borderColorTwo').style.color='#EBEBEB';
                        document.querySelector('#optionThree').style.backgroundColor='white'; 
                        document.querySelector('#titleThreeOne').style.color='#333333';
                        document.querySelector('#titleThreeTwo').style.color='#333333';
                        document.getElementById('selectorThree').src='../images/UnselectedCircle.svg';
                        document.querySelector('#borderColorThree').style.color='#EBEBEB';
                        mySelection=1;
                        ">                        
                </div>
            </div>
            <span class="sprk-c-Divider" id="borderColorOne" data-id="divider-1"></span>
            <div style="width:65%; padding:16px 16px 0 16px; float:left;">
                <p class="sprk-b-TypeBodyFour optionDetails">Loan Amount</p>
                <p class="sprk-b-TypeBodyFour optionDetails">Term after 6 motnhs</p>
                <p class="sprk-b-TypeBodyFour optionDetails">APR after 6 months<img src="../images/help.png" style="padding-left:8px;"></p>
            </div>
            <div style="width:35%; text-align:right; padding:16px 16px 0 16px; float:right;">
                <p class="sprk-b-TypeDisplaySeven optionDetails">$30,000</p>
                    <p class="sprk-b-TypeDisplaySeven optionDetails">60 Mo.</p>
                    <p class="sprk-b-TypeDisplaySeven optionDetails">7.99%</p>
                </div>
                <div style="width:100%; float:bottom;  padding:0 16px 24px 16px;">
                    <p class="sprk-b-TypeBodyFour">0% APR will be offered for first six months, and then the specified APR would be charged for remained 60 months.</p>
                </div>
            </div>
            <div class="optionNormal" > 
                <div class="optionTitle" id="optionTwo">
                    <div style="float:left;">
                        <p id="titleTwoOne" class="sprk-b-TypeBodyFour" style="padding-bottom:8px;">Pay off quickly!</p>
                        <p id="titleTwoTwo" class="sprk-b-TypeBodyTwo" style="display:inline;">
                            <b id="demoTwo" style="display:inline !important; font-size: 1.625rem; font-weight: 500;">
                                    ${opTwo}
                            </b> / month
                        </p>
                    </div>
                    <div class="select">
                        <img id="selectorTwo" src="../images/UnselectedCircle.svg"
                        onclick="
            document.querySelector('#optionOne').style.backgroundColor='white'; 
            document.querySelector('#titleOneOne').style.color='#333333';
            document.querySelector('#titleOneTwo').style.color='#333333';
            document.querySelector('#borderColorOne').style.borderColor='#EBEBEB';
            document.getElementById('selectorOne').src='../images/UnselectedCircle.svg';
            document.querySelector('#optionTwo').style.backgroundColor='#13A48E'; 
            document.querySelector('#titleTwoOne').style.color='white';
            document.querySelector('#titleTwoTwo').style.color='white';
            document.getElementById('selectorTwo').src='../images/SelectedCircle.svg';
            document.querySelector('#borderColorTwo').style.borderColor='#FFFFFF';
            document.querySelector('#optionThree').style.backgroundColor='white'; 
            document.querySelector('#titleThreeOne').style.color='#333333';
            document.querySelector('#titleThreeTwo').style.color='#333333';
            document.querySelector('#borderColorThree').style.borderColor='#EBEBEB';
            document.getElementById('selectorThree').src='../images/UnselectedCircle.svg';
            mySelection=2;

            ">   
                    </div>
                </div>
                <span class="sprk-c-Divider" id="borderColorTwo" data-id="divider-1" style="margin: 0 16px 0 16px;"></span>
                <div style="width:65%; padding:16px 16px 0 16px; float:left;">
                    <p class="sprk-b-TypeBodyFour optionDetails">Loan Amount</p>
                    <p class="sprk-b-TypeBodyFour optionDetails">Term after 6 months</p>
                    <p class="sprk-b-TypeBodyFour optionDetails">APR<img src="../images/help.png" style="padding-left:8px;"></p>
                </div>
                <div style="width:35%; text-align:right; padding:16px 16px 0 16px; float:right;">
                    <p class="sprk-b-TypeDisplaySeven optionDetails">$30,000</p>
                    <p class="sprk-b-TypeDisplaySeven optionDetails">36 Mo.</p>
                    <p class="sprk-b-TypeDisplaySeven optionDetails">7.99%</p>
                </div>
                <div style="width:100%; float:bottom;  padding:0 16px 24px 16px;">
                    <p class="sprk-b-TypeBodyFour"></p>
                </div>
            </div>
            <div class="optionNormal"> 
                <div class="optionTitle" id="optionThree">
                    <div style="float:left;">
                        <p id="titleThreeOne" class="sprk-b-TypeBodyFour" style="padding-bottom:8px;">Increase monthly savings!</p>
                        <p id="titleThreeTwo" class="sprk-b-TypeBodyTwo" style="display:inline;">
                            <b  id="demoThree" style="display:inline !important; font-size: 1.625rem; font-weight: 500;">
                                    ${opThree}
                            </b> / month
                        </p>
                    </div>
                    <div class="select">
                        <img id="selectorThree" src="../images/UnselectedCircle.svg" onclick="
            document.querySelector('#optionOne').style.backgroundColor='white'; 
            document.querySelector('#titleOneOne').style.color='#333333';
            document.querySelector('#titleOneTwo').style.color='#333333';
            document.querySelector('#borderColorOne').style.borderColor='#EBEBEB';
            document.getElementById('selectorOne').src='../images/UnselectedCircle.svg';
            document.querySelector('#optionTwo').style.backgroundColor='white'; 
            document.querySelector('#titleTwoOne').style.color='#333333';
            document.querySelector('#titleTwoTwo').style.color='#333333';
            document.querySelector('#borderColorTwo').style.borderColor='#EBEBEB';
            document.getElementById('selectorTwo').src='../images/UnselectedCircle.svg';
            document.querySelector('#optionThree').style.backgroundColor='#13A48E'; 
            document.querySelector('#titleThreeOne').style.color='white';
            document.querySelector('#titleThreeTwo').style.color='white';
            document.querySelector('#borderColorThree').style.borderColor='#FFFFFF';
            document.getElementById('selectorThree').src='../images/SelectedCircle.svg';
            mySelection=3;
            ">
                    </div>
                </div>
                <span class="sprk-c-Divider" id="borderColorThree" data-id="divider-1" style="margin: 0 16px 0 16px;"></span>
                <div style="width:65%; padding:16px 16px 0 16px; float:left;">
                    <p class="sprk-b-TypeBodyFour optionDetails">Loan Amount</p>
                    <p class="sprk-b-TypeBodyFour optionDetails">Term after 6 months</p>
                    <p class="sprk-b-TypeBodyFour optionDetails">APR<img src="../images/help.png" style="padding-left:8px;"></p>
                </div>
                <div style="width:35%; text-align:right; padding:16px 16px 0 16px; float:right;">
                    <p class="sprk-b-TypeDisplaySeven optionDetails">$30,000</p>
                    <p class="sprk-b-TypeDisplaySeven optionDetails">60 Mo.</p>
                    <p class="sprk-b-TypeDisplaySeven optionDetails">9.99%</p>
                </div>
            </div>
            <p class="sprk-b-TypeBodyFour textPadding16" >Loan payment amount and APR assumes Autopay discount. Offers expire in 30 days. By selecting an offer and continuing, you will be subject to a hard credit inquiry (which may impact your credit score).</p>
        </div>
        <div id="CTA">
            <button class="sprk-c-Button" data-id="button-1" style="width:100%; padding-top:18px; padding-bottom:18px; margin-top:32px;" onclick="cta();">
                    Select My Offer
            </button>`;
                }else{
                    document.querySelector('.options').innerHTML=`
                    <h5 class="sprk-b-TypeDisplaySix" style="padding:16px;">Sorry, our offer starts from $1,000.</h5>
                    `;
                }
            }