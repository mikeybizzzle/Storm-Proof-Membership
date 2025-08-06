import React, { useState } from 'react';
import { DocumentLayout } from './DocumentLayout';
import { 
  HeadingBlock, 
  TextBlock, 
  ChecklistBlock, 
  VideoBlock, 
  CalloutBlock, 
  ResourceBlock,
  DividerBlock,
  CTABlock 
} from './ContentBlocks';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

interface PreStormGuideProps {
  user: User;
}

export function PreStormGuide({ user }: PreStormGuideProps) {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    'exterior-front': false,
    'exterior-sides': false,
    'exterior-back': false,
    'roof-overview': false,
    'roof-details': false,
    'windows-doors': false,
    'foundation': false,
    'utilities': false
  });

  const handleToggleChecklistItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const photoChecklistItems = [
    {
      id: 'exterior-front',
      text: 'Full Exterior - Front View',
      completed: checkedItems['exterior-front'],
      description: 'Wide shot of the front from the street showing the entire structure'
    },
    {
      id: 'exterior-sides',
      text: 'Full Exterior - Side Views',
      completed: checkedItems['exterior-sides'],
      description: 'Left and right angle shots from property lines'
    },
    {
      id: 'exterior-back',
      text: 'Full Exterior - Rear View',
      completed: checkedItems['exterior-back'],
      description: 'Rear view from property line showing back of structure'
    },
    {
      id: 'roof-overview',
      text: 'Roof Overview',
      completed: checkedItems['roof-overview'],
      description: 'Wide shots of each roof slope from ground level'
    },
    {
      id: 'roof-details',
      text: 'Roof Details',
      completed: checkedItems['roof-details'],
      description: 'Close-ups of shingles, flashing, gutters, and any existing damage'
    },
    {
      id: 'windows-doors',
      text: 'Windows & Doors',
      completed: checkedItems['windows-doors'],
      description: 'Individual photos of each window and door, focusing on frames and seals'
    },
    {
      id: 'foundation',
      text: 'Foundation & Exterior Walls',
      completed: checkedItems['foundation'],
      description: 'Photos of foundation, siding, and any cracks or damage'
    },
    {
      id: 'utilities',
      text: 'Utilities & Systems',
      completed: checkedItems['utilities'],
      description: 'HVAC units, electrical panels, water meters, and outdoor equipment'
    }
  ];

  return (
    <DocumentLayout
      user={user}
      title="Pre-Storm Photo Documentation"
      subtitle="Complete guide to capturing insurance-grade photos that prove your property's condition"
      emoji="📸"
      contentType="guide"
      readTime="15 min read"
      lastUpdated="Dec 15, 2024"
    >
      <TextBlock>
        Proper documentation of your property's condition before storm season is one of the most 
        important steps you can take to protect your insurance coverage. This comprehensive guide 
        will walk you through the exact photos you need to take and how to take them properly.
      </TextBlock>

      <CalloutBlock type="warning" title="Important Safety Notice">
        <strong>DO NOT get on your roof unless you are trained, properly equipped, and physically capable.</strong>
        <br /><br />
        Falls are a leading cause of home inspection injuries. If in doubt, document from the ground 
        or hire a professional. Your safety is worth more than any insurance claim.
      </CalloutBlock>

      <HeadingBlock level={2}>Why Pre-Storm Documentation Matters</HeadingBlock>
      
      <TextBlock>
        Insurance companies are increasingly denying claims based on "pre-existing damage" or "lack of maintenance." 
        By having comprehensive before-and-after photos, you can prove that damage occurred during a specific storm event.
      </TextBlock>

      <VideoBlock
        title="Professional Documentation Techniques"
        duration="12:34"
        description="Watch how insurance professionals document properties for maximum claim success"
        locked={user.membershipLevel !== 'premium'}
      />

      <HeadingBlock level={2}>Essential Photography Checklist</HeadingBlock>
      
      <TextBlock>
        Use this comprehensive checklist to ensure you capture all necessary angles and details. 
        Each item is critical for establishing your property's pre-storm condition.
      </TextBlock>

      <ChecklistBlock
        items={photoChecklistItems}
        onToggle={handleToggleChecklistItem}
        allowToggle={true}
      />

      <DividerBlock />

      <HeadingBlock level={2}>Photography Best Practices</HeadingBlock>

      <HeadingBlock level={3}>Equipment You'll Need</HeadingBlock>
      <TextBlock>
        • Smartphone or digital camera with date/time stamp enabled<br />
        • Measuring tape or ruler for scale reference<br />
        • Notepad for recording photo locations<br />
        • Ladder (only if you're experienced and comfortable using one)
      </TextBlock>

      <HeadingBlock level={3}>Photo Quality Requirements</HeadingBlock>
      <TextBlock>
        • <strong>Resolution:</strong> Use the highest quality setting available<br />
        • <strong>Focus:</strong> Ensure all photos are sharp and clear<br />
        • <strong>Lighting:</strong> Take photos during daylight hours when possible<br />
        • <strong>Scale:</strong> Include reference objects to show size of any damage<br />
        • <strong>Angles:</strong> Take multiple angles of the same area
      </TextBlock>

      <CalloutBlock type="info" title="Professional Tip">
        Take photos from the same positions each season. This creates a consistent record 
        that makes it easier to spot changes and prove when damage occurred.
      </CalloutBlock>

      <HeadingBlock level={2}>Organizing Your Photos</HeadingBlock>
      
      <TextBlock>
        Proper organization is just as important as taking the photos. Create folders by date 
        and label each photo with its location and purpose.
      </TextBlock>

      <ResourceBlock
        title="Photo Organization Template"
        description="Downloadable folder structure and naming convention template"
        type="pdf"
        locked={user.membershipLevel !== 'premium'}
      />

      <ResourceBlock
        title="Insurance Photo Submission Guide"
        description="Step-by-step instructions for submitting photos with your claim"
        type="document"
        locked={user.membershipLevel !== 'premium'}
      />

      <DividerBlock />

      <CTABlock
        title="Overwhelmed by the Documentation Process?"
        description="Storm Proof Professional Documentation handles everything for you with 125+ professional photos, secure storage, and instant claim packages ready to submit."
        buttonText="Get Professional Documentation"
        onAction={() => alert('Upgrade to Premium for professional documentation services')}
      />

      <CalloutBlock type="success" title="Next Steps">
        After completing your photo documentation:
        <br />• Store photos in multiple locations (cloud storage + physical backup)
        <br />• Create a simple inventory list with photo references
        <br />• Schedule seasonal updates to keep your documentation current
        <br />• Review your insurance policy to understand your coverage
      </CalloutBlock>
    </DocumentLayout>
  );
}