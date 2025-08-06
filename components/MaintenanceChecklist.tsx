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

interface MaintenanceChecklistProps {
  user: User;
}

export function MaintenanceChecklist({ user }: MaintenanceChecklistProps) {
  const [springTasks, setSpringTasks] = useState<{ [key: string]: boolean }>({
    'inspect-roof': false,
    'clean-gutters': false,
    'check-siding': false,
    'inspect-windows': false,
    'test-drainage': false,
    'trim-trees': false
  });

  const [fallTasks, setFallTasks] = useState<{ [key: string]: boolean }>({
    'second-roof-check': false,
    'gutter-cleaning': false,
    'caulk-inspection': false,
    'hvac-prep': false,
    'storm-supplies': false,
    'insurance-review': false
  });

  const handleToggleSpringTask = (id: string) => {
    setSpringTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleFallTask = (id: string) => {
    setFallTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const springMaintenanceItems = [
    {
      id: 'inspect-roof',
      text: 'Inspect Roof Shingles',
      completed: springTasks['inspect-roof'],
      description: 'Look for loose, damaged, or missing shingles. Check for granule loss.'
    },
    {
      id: 'clean-gutters',
      text: 'Clean Gutters & Downspouts',
      completed: springTasks['clean-gutters'],
      description: 'Remove debris and ensure proper water flow. Check for leaks or damage.'
    },
    {
      id: 'check-siding',
      text: 'Inspect Exterior Siding',
      completed: springTasks['check-siding'],
      description: 'Look for cracks, holes, or loose panels. Check caulking around openings.'
    },
    {
      id: 'inspect-windows',
      text: 'Check Windows & Doors',
      completed: springTasks['inspect-windows'],
      description: 'Test seals, weatherstripping, and operation. Replace worn components.'
    },
    {
      id: 'test-drainage',
      text: 'Test Property Drainage',
      completed: springTasks['test-drainage'],
      description: 'Ensure water flows away from foundation. Clear drainage paths.'
    },
    {
      id: 'trim-trees',
      text: 'Trim Trees & Shrubs',
      completed: springTasks['trim-trees'],
      description: 'Remove branches within 10 feet of roof. Cut back overgrown vegetation.'
    }
  ];

  const fallMaintenanceItems = [
    {
      id: 'second-roof-check',
      text: 'Second Roof Inspection',
      completed: fallTasks['second-roof-check'],
      description: 'Pre-storm season final check. Address any summer damage immediately.'
    },
    {
      id: 'gutter-cleaning',
      text: 'Final Gutter Cleaning',
      completed: fallTasks['gutter-cleaning'],
      description: 'Remove fall leaves and debris. Ensure downspouts drain properly.'
    },
    {
      id: 'caulk-inspection',
      text: 'Caulk & Seal Inspection',
      completed: fallTasks['caulk-inspection'],
      description: 'Re-caulk around windows, doors, and penetrations as needed.'
    },
    {
      id: 'hvac-prep',
      text: 'HVAC System Preparation',
      completed: fallTasks['hvac-prep'],
      description: 'Secure outdoor units. Change filters. Schedule maintenance if needed.'
    },
    {
      id: 'storm-supplies',
      text: 'Storm Supply Inventory',
      completed: fallTasks['storm-supplies'],
      description: 'Stock up on tarps, sandbags, plywood, and emergency supplies.'
    },
    {
      id: 'insurance-review',
      text: 'Insurance Policy Review',
      completed: fallTasks['insurance-review'],
      description: 'Review coverage limits, deductibles, and contact information.'
    }
  ];

  const completedSpringTasks = Object.values(springTasks).filter(Boolean).length;
  const completedFallTasks = Object.values(fallTasks).filter(Boolean).length;
  const totalSpringTasks = springMaintenanceItems.length;
  const totalFallTasks = fallMaintenanceItems.length;

  return (
    <DocumentLayout
      user={user}
      title="Seasonal Maintenance Checklist"
      subtitle="Prevent damage and avoid 'lack of maintenance' claim denials"
      emoji="🔧"
      contentType="checklist"
      readTime="10 min read"
      lastUpdated="Nov 28, 2024"
    >
      <TextBlock>
        Regular maintenance is your first line of defense against storm damage and insurance claim denials. 
        This seasonal checklist helps you stay ahead of problems before they become expensive repairs.
      </TextBlock>

      <CalloutBlock type="warning" title="Maintenance Documentation Tip">
        Take photos of completed maintenance tasks and keep receipts for any work performed. 
        This documentation can be crucial if your insurance company questions your maintenance history.
      </CalloutBlock>

      <HeadingBlock level={2}>Why Seasonal Maintenance Matters</HeadingBlock>
      
      <TextBlock>
        Insurance companies can deny claims if they determine damage was caused by "lack of maintenance" 
        rather than storm events. Regular upkeep not only protects your home but also protects your coverage.
      </TextBlock>

      <VideoBlock
        title="Home Maintenance for Insurance Protection"
        duration="18:45"
        description="Learn the maintenance tasks that insurance adjusters look for when evaluating claims"
        locked={user.membershipLevel !== 'premium'}
      />

      <DividerBlock />

      <HeadingBlock level={2}>Spring Maintenance Tasks</HeadingBlock>
      
      <TextBlock>
        Complete these tasks in March-May to prepare your home for storm season. 
        Spring maintenance focuses on winter damage assessment and preparation for heavy rains.
      </TextBlock>
      
      <div style={{
        background: '#f8f9fa',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '24px',
        border: '1px solid #e5e5e5'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
          <span style={{ fontSize: '16px', fontWeight: '500' }}>Spring Progress</span>
          <span style={{ fontSize: '14px', color: '#666' }}>
            {completedSpringTasks} of {totalSpringTasks} completed
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          background: '#e5e5e5',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${(completedSpringTasks / totalSpringTasks) * 100}%`,
            height: '100%',
            background: '#22c55e',
            transition: 'width 0.3s'
          }} />
        </div>
      </div>

      <ChecklistBlock
        items={springMaintenanceItems}
        onToggle={handleToggleSpringTask}
        allowToggle={true}
      />

      <CalloutBlock type="info" title="Cost of Ignoring Maintenance">
        <strong>Roof Issues:</strong> $5,000-$15,000 in preventable repairs<br />
        <strong>Gutter Problems:</strong> $2,000-$10,000 in water damage<br />
        <strong>Siding Damage:</strong> $3,000-$8,000 in replacement costs
      </CalloutBlock>

      <DividerBlock />

      <HeadingBlock level={2}>Fall Maintenance Tasks</HeadingBlock>
      
      <TextBlock>
        Complete these tasks in September-November to prepare for storm season and winter weather. 
        Fall maintenance is your final opportunity to address issues before severe weather arrives.
      </TextBlock>

      <div style={{
        background: '#f8f9fa',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '24px',
        border: '1px solid #e5e5e5'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
          <span style={{ fontSize: '16px', fontWeight: '500' }}>Fall Progress</span>
          <span style={{ fontSize: '14px', color: '#666' }}>
            {completedFallTasks} of {totalFallTasks} completed
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          background: '#e5e5e5',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${(completedFallTasks / totalFallTasks) * 100}%`,
            height: '100%',
            background: '#22c55e',
            transition: 'width 0.3s'
          }} />
        </div>
      </div>

      <ChecklistBlock
        items={fallMaintenanceItems}
        onToggle={handleToggleFallTask}
        allowToggle={true}
      />

      <HeadingBlock level={2}>Professional Maintenance Resources</HeadingBlock>

      <ResourceBlock
        title="Maintenance Schedule Template"
        description="Printable calendar template with reminder dates for each task"
        type="pdf"
        locked={user.membershipLevel !== 'premium'}
      />

      <ResourceBlock
        title="Contractor Evaluation Guide"
        description="How to find and evaluate qualified maintenance professionals"
        type="document"
        locked={user.membershipLevel !== 'premium'}
      />

      <ResourceBlock
        title="Maintenance Photo Documentation"
        description="Video guide showing how to document completed maintenance work"
        type="video"
        locked={user.membershipLevel !== 'premium'}
      />

      <DividerBlock />

      <CTABlock
        title="Protect Your Investment"
        description="Regular maintenance prevents damage, but when storms hit, you need proof of your home's condition. Storm Proof provides comprehensive documentation and maintenance tracking."
        buttonText="Get Storm Proof Protection"
        onAction={() => alert('Upgrade to Premium for maintenance tracking and professional documentation')}
      />

      <CalloutBlock type="success" title="Maintenance Success Tips">
        • Schedule tasks in your calendar with reminders<br />
        • Keep a maintenance log with photos and receipts<br />
        • Address small problems before they become big ones<br />
        • Don't skip seasonal tasks - consistency is key<br />
        • When in doubt, consult with professionals
      </CalloutBlock>
    </DocumentLayout>
  );
}