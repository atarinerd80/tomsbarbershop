import React from 'react';

export class Header extends React.Component {
  render() {
    const backgroundImgPath = 'https://imageprocessor.digital.vistaprint.com/crop/0,0,7360x4912/maxWidth/2000/https://assets.digital.vistaprint.com/production/a32f75e6-8002-4a55-8eb9-28f5d562f43e';
    const logo = 'https://imageprocessor.digital.vistaprint.com/crop/120,239,960x722/maxWidth/1000/https://www.vistaprint.com/preview/image.aspx?image_type=upload&image_token=2162204213-6e09c409c4-3121eb&png=1';
    return (
      <>
        <header className="hero-area th-fullpage" style={{ backgroundImage: `url(${backgroundImgPath})` }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={logo}/>
              </div>
            </div>
          </div>
        </header> 
      </>
    );
  }
}

export default Header;